'use client'

import { VagaInputComponent } from "../components/input/VagaInputComponent"
import { CurriculoInputComponent } from "../components/input/CurriculoInputComponent"
import { OutputComponent } from "@/components/output/OutputComponent"
import { VagaInput, AnaliseOutput } from "@/types"
import { useState, useTransition } from "react"
import { analisarCurriculo } from "@/app/actions"
import "./styles.css"

type View = "input" | "loading" | "output"

export default function Home() {
  const [view, setView] = useState<View>("input")
  const [isPending, startTransition] = useTransition()

  const [vaga, setVaga] = useState<VagaInput>({
    requisitos: [],
    competencias: [],
    diferenciais: []
  })

  const [resposta, setResposta] = useState<AnaliseOutput | null>(null)

  async function handleFormSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    
    const formData = new FormData(event.currentTarget)
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
        setView("input")
      }
    })
  }

  return (
    <div className="flex flex-col gap-5 w-200 p-6">
      {view === "input" && (
    <div className="flex flex-col gap-5">
          <h1 className="font-bold text-center text-xl">Analise o seu Currículo!</h1>

          <p className="text-center text-[#374151]">
            Compare a aderência do seu perfil profissional com os requisitos da vaga utilizando Inteligência Artificial. Suporta texto ou arquivos em PDF.
          </p>

          <form onSubmit={handleFormSubmit} className="flex flex-col gap-8">
            <VagaInputComponent vaga={vaga} setVaga={setVaga} />

            <CurriculoInputComponent />

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

      {view === "output" && resposta && (
        <div>
          <OutputComponent resposta={resposta} />
        </div>
      )}
    </div>
  )
}