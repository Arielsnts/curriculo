'use client'

import { VagaInputComponent } from "../components/input/VagaInputComponent"
import { CurriculoInputComponent } from "../components/input/CurriculoInputComponent"
import { OutputComponent } from "@/components/output/OutputComponent"
import { VagaInput, AnaliseOutput } from "@/types"
import { useState, useTransition, useRef } from "react"
import { analisarCurriculo } from "@/app/actions"
import "./styles.css"

type View = "input" | "loading" | "output" | "erro"

export default function Home() {
  const [view, setView] = useState<View>("erro")
  const [erroForm, setErroForm] = useState("")
  const [erroResposta, setErroResposta] = useState("")
  const [isPending, startTransition] = useTransition()
  const formRef = useRef<HTMLFormElement>(null)

  const [vaga, setVaga] = useState<VagaInput>({
    requisitos: [],
    competencias: [],
    diferenciais: []
  })

  const [resposta, setResposta] = useState<AnaliseOutput | null>(null)

  const dadosExemploVaga: VagaInput = {
    requisitos: ["Experiência mínima de 2 anos com React e Next.js", "Domínio de TypeScript", "Conhecimento em Tailwind CSS"],
    competencias: ["Arquitetura de Front-end", "Consumo de APIs RESTful", "Estado global com Context API ou Zustand"],
    diferenciais: ["Conhecimento em Server Actions do Next.js", "Testes unitários com Jest ou Vitest"]
  }

  const textoExemploCurriculo = `Desenvolvedor Front-end focado no ecossistema React. Tenho 3 anos de experiência construindo aplicações web modernas utilizando Next.js, TypeScript e Tailwind CSS. Tenho facilidade em integrar APIs complexas e trabalhar com componentes reutilizáveis.`

  const temDadosPreenchidos = vaga.requisitos.length > 0

  function gerenciarTemplate() {
    setErroForm("")

    if (temDadosPreenchidos) {
      setVaga({ requisitos: [], competencias: [], diferenciais: [] })

      if (formRef.current) {
        formRef.current.reset()
      }
    } else {
      setVaga(dadosExemploVaga)

      if (formRef.current) {
        const textarea = formRef.current.querySelector('textarea[name="textoCurriculo"]') as HTMLTextAreaElement
        if (textarea) {
          textarea.value = textoExemploCurriculo
        }
      }
    }
  }

  async function handleFormSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    setErroForm("")

    if (vaga.requisitos.length === 0) {
      setErroForm("Adicione pelo menos um requisito para a vaga!")
      return
    }

    const formData = new FormData(event.currentTarget)
    const tipoCurriculo = formData.get("tipoCurriculo")

    if (tipoCurriculo === "escolha") {
      setErroForm("Por favor, selecione uma opção de envio do currículo (Texto ou PDF)!")
      return
    }

    if (tipoCurriculo === "text") {
      const texto = formData.get("textoCurriculo")?.toString().trim()
      if (!texto) {
        setErroForm("Por favor, digite o texto do seu currículo!")
        return
      }
    }

    if (tipoCurriculo === "pdf") {
      const arquivo = formData.get("arquivoCurriculo") as File
      if (!arquivo || arquivo.size === 0) {
        setErroForm("Por favor, faça o upload do arquivo PDF do seu currículo!")
        return
      }
    }

    formData.append('vaga', JSON.stringify(vaga))
    setView("loading")

    startTransition(async () => {
      try {
        const resultado: AnaliseOutput = await analisarCurriculo(formData)
        setResposta(resultado)
        setView("output")
      }
      catch (e) {
        console.error(e)
        setErroResposta("Ocorreu um erro ao processar sua análise. Verifique os dados e a conexão com a API do Gemini.")
        setView("erro")
      }
    })
  }
  return (
    <div className="flex flex-col gap-5 w-200 p-6">
      {view === "input" && (
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-xl text-center">Analise o seu Currículo!</h1>


          <p className="text-sm text-[#374151] text-center">
            Compare a aderência do seu perfil profissional com os requisitos da vaga utilizando Inteligência Artificial. Suporta texto ou arquivos em PDF.
          </p>

          <form ref={formRef} onSubmit={handleFormSubmit} className="flex flex-col gap-8">
            <VagaInputComponent vaga={vaga} setVaga={setVaga} />

            <CurriculoInputComponent />

            {erroForm && (
              <div className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-800 animate-cascade delay-1">
                <span>{erroForm}</span>
              </div>
            )}

            <button
              type="button"
              onClick={gerenciarTemplate}
              className={"btn"}
            >
              {temDadosPreenchidos ? "Limpar Form" : "Usar Dados de Teste"}
            </button>

            <button type="submit" className="btn-analisar" disabled={isPending}>
              Analisar
            </button>
          </form>
        </div>
      )}

      {view === "loading" && (
        <div className="flex flex-col items-center justify-center gap-4 py-12">
          <div className="loading-spinner"></div>

          <div className="flex flex-col items-center gap-1 text-center">
            <h2 className="text-lg font-semibold text-gray-800 animate-pulse">
              Analisando Currículo...
            </h2>
            <p className="text-sm text-gray-500">
              A inteligência artificial está mapeando suas competências.
            </p>
          </div>
        </div>
      )}

      {view === "erro" && (
        <div className="flex flex-col items-center justify-center gap-5 text-center py-12 animate-cascade delay-1">
          <h2 className="text-xl font-bold text-gray-900">Algo deu errado</h2>
          <p className="text-sm text-gray-600 max-w-md leading-relaxed">{erroResposta}</p>
          <button onClick={() => setView("input")} type="button" className="btn">
            Tentar Novamente
          </button>
        </div>
      )}

      {view === "output" && resposta && (
        <div className="flex flex-col gap-6">
          <OutputComponent resposta={resposta} />
          <button onClick={() => setView("input")} type="button" className="btn mt-4">
            Analisar Outro Currículo
          </button>
        </div>
      )}
    </div>
  )
}