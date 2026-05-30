'use client'

import { VagaInputComponent } from "@/components/input/VagaInputComponent"
import { CurriculoInputComponent } from "@/components/input/CurriculoInputComponent"
import { LoadingView } from "@/components/feedback/LoadingView"
import { ErrorView } from "@/components/feedback/ErrorView"
import { OutputComponent } from "@/components/output/OutputComponent"

import { VagaInput, AnaliseOutput, AnalisarCurriculoResponse } from "@/types"
import { DADOS_EXEMPLO_VAGA, TEXTO_EXEMPLO_CURRICULO, LIMITES } from "@/constants/index"
import { useState, useTransition, useRef } from "react"
import { analisarCurriculo } from "@/app/actions"

import generalStyles from "@/styles/general.module.css"

export type View = "input" | "loading" | "output" | "erro"

export default function Home() {
  const [view, setView] = useState<View>("input")

  const [erroForm, setErroForm] = useState("")
  const [erroResposta, setErroResposta] = useState("Ocorreu um erro ao processar sua análise. Tente novamente mais tarde!")

  const [isPending, startTransition] = useTransition()
  const formRef = useRef<HTMLFormElement>(null)

  const [vaga, setVaga] = useState<VagaInput>({
    requisitos: [],
    competencias: [],
    diferenciais: []
  })

  const [resposta, setResposta] = useState<AnaliseOutput | null>(null)

  const temDadosPreenchidos = vaga.requisitos.length > 0

  function gerenciarTemplate() {
    setErroForm("")

    if (temDadosPreenchidos) {
      setVaga({ requisitos: [], competencias: [], diferenciais: [] })

      if (formRef.current) {
        formRef.current.reset()
      }
    } else {
      setVaga(DADOS_EXEMPLO_VAGA)

      if (formRef.current) {
        const textarea = formRef.current.querySelector('textarea[name="textoCurriculo"]') as HTMLTextAreaElement
        if (textarea) {
          textarea.value = TEXTO_EXEMPLO_CURRICULO
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

    if (tipoCurriculo === "text") {
      const texto = formData.get("textoCurriculo")?.toString().trim()

      if (!texto) {
        setErroForm("Por favor, digite o texto do seu currículo!")
        return
      }

      if (texto.length < LIMITES.MIN_CARACTERES_CURRICULO_TEXTO) {
        setErroForm(`O texto do currículo deve ter no mínimo ${LIMITES.MIN_CARACTERES_CURRICULO_TEXTO} caracteres. Seu texto tem ${texto.length} caracteres.`)
        return
      }

      // Valida tamanho máximo do texto
      if (texto.length > LIMITES.MAX_CARACTERES_CURRICULO_TEXTO) {
        setErroForm(`O texto do currículo deve ter no máximo ${LIMITES.MAX_CARACTERES_CURRICULO_TEXTO} caracteres. Seu texto tem ${texto.length} caracteres.`)
        return
      }
    }

    if (tipoCurriculo === "pdf") {
      const arquivo = formData.get("arquivoCurriculo") as File

      if (!arquivo || arquivo.size === 0) {
        setErroForm("Por favor, faça o upload do arquivo PDF do seu currículo!")
        return
      }

      if (arquivo.size > LIMITES.MAX_TAMANHO_PDF_BYTES) {
        const tamanhoMB = (arquivo.size / (1024 * 1024)).toFixed(2)
        setErroForm(`O arquivo PDF deve ter no máximo ${LIMITES.MAX_TAMANHO_PDF_MB}MB. Seu arquivo tem ${tamanhoMB}MB.`)
        return
      }

      if (arquivo.type !== 'application/pdf' && !arquivo.name.toLowerCase().endsWith('.pdf')) {
        setErroForm("Por favor, faça o upload de um arquivo PDF válido!")
        return
      }
    }

    formData.append('vaga', JSON.stringify(vaga))
    setView("loading")

    startTransition(async () => {
      try {
        const resultado: AnalisarCurriculoResponse = await analisarCurriculo(formData)

        if (!resultado.success) {
          setErroResposta(resultado.message)
          setView("erro")
          return
        }

        setResposta(resultado.data)
        setView("output")
      }
      catch (e) {
        console.error(e)
        setView("erro")
      }
    })
  }

  return (
    <div className="flex flex-col gap-5 w-200 p-6">
      {view === "input" && (
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-xl text-[#1f2937] text-center">Analise o seu Currículo!</h1>


          <p className="text-sm text-[#374151] text-center">
            Compare a aderência do seu perfil profissional com os requisitos da vaga utilizando Inteligência Artificial. Suporta texto ou arquivos em PDF.
          </p>

          <form ref={formRef} onSubmit={handleFormSubmit} className="flex flex-col gap-8">
            <VagaInputComponent vaga={vaga} setVaga={setVaga} setErroForm={setErroForm}/>

            <CurriculoInputComponent />

            {erroForm && (
              <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                <span>{erroForm}</span>
              </div>
            )}

            <button
              type="button"
              onClick={gerenciarTemplate}
              className={generalStyles.buttonWhite}
            >
              {temDadosPreenchidos ? "Limpar Form" : "Usar Dados de Teste"}
            </button>

            <button type="submit" className={generalStyles.buttonBlue} disabled={isPending}>
              Analisar
            </button>
          </form>
        </div>
      )}

      {view === "loading" && (
        <LoadingView />
      )}

      {view === "erro" && (
        <ErrorView erroResposta={erroResposta} setView={setView} />
      )}

      {view === "output" && resposta && (
        <div className="flex flex-col gap-6">
          <OutputComponent resposta={resposta} />
          <button onClick={() => setView("input")} type="button" className={generalStyles.buttonWhite}>
            Analisar Outro Currículo
          </button>
        </div>
      )}
    </div>
  )
}