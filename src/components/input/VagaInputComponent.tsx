import { VagaInput } from "@/types"
import { useState } from "react"
import styles from "@/styles/input.module.css"

interface vagaProps {
  vaga: VagaInput
  setVaga: React.Dispatch<React.SetStateAction<VagaInput>>
}

export function VagaInputComponent({ vaga, setVaga }: vagaProps) {
  const [requisito, setRequisito] = useState("")
  const [competencia, setCompetencia] = useState("")
  const [diferencial, setDiferencial] = useState("")

  function addRequisito() {
    if (!requisito.trim()) return
    setVaga({ ...vaga, requisitos: [...vaga.requisitos, requisito.trim()] })
    setRequisito("")
  }

  function addCompetencia() {
    if (!competencia.trim()) return
    setVaga({ ...vaga, competencias: [...vaga.competencias, competencia.trim()] })
    setCompetencia("")
  }

  function addDiferencial() {
    if (!diferencial.trim()) return
    setVaga({ ...vaga, diferenciais: [...vaga.diferenciais, diferencial.trim()] })
    setDiferencial("")
  }

  function removerItem(lista: "requisitos" | "competencias" | "diferenciais", indexParaRemover: number) {
    setVaga({
      ...vaga,
      [lista]: vaga[lista].filter((_, index) => index !== indexParaRemover)
    })
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-center text-xl">Vaga</h2>

      {/* CAMPO DE REQUISITOS */}
      <div className="flex flex-col gap-4">
        <label htmlFor="requisitos">Requisitos</label>
        <input
          id="requisitos"
          type="text"
          value={requisito}
          onChange={(e) => setRequisito(e.target.value)}
          placeholder="Ex: React"
          className={styles.inputTags}
        />
        <button type="button" onClick={addRequisito} className={styles.buttonBlack}>
          Adicionar Requisito
        </button>

        {/* LÓGICA DE LISTAGEM E REMOÇÃO */}
        <div className="lista">
          {vaga.requisitos.map((req, index) => (
            <div key={index}>
              <span>{req}</span>
              <button type="button" onClick={() => removerItem("requisitos", index)}>
                x
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CAMPO DE COMPETÊNCIAS */}
      <div className="flex flex-col gap-4">
        <label htmlFor="competencia">Competências</label>
        <input
          id="competencia"
          type="text"
          value={competencia}
          onChange={(e) => setCompetencia(e.target.value)}
          placeholder="Ex: Liderança"
          className={styles.inputTags}
        />
        <button type="button" onClick={addCompetencia} className={styles.buttonBlack}>
          Adicionar Competência
        </button>

        {/* LÓGICA DE LISTAGEM E REMOÇÃO */}
        <div className="lista">
          {vaga.competencias.map((comp, index) => (
            <div key={index}>
              <span>{comp}</span>
              <button type="button" onClick={() => removerItem("competencias", index)}>
                x
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CAMPO DE DIFERENCIAIS */}
      <div className="flex flex-col gap-4">
        <label htmlFor="diferencial">Diferenciais</label>
        <input
          id="diferencial"
          type="text"
          value={diferencial}
          onChange={(e) => setDiferencial(e.target.value)}
          placeholder="Ex: Next.js"
          className={styles.inputTags}
        />
        <button type="button" onClick={addDiferencial} className={styles.buttonBlack}>
          Adicionar Diferencial
        </button>

        {/* LÓGICA DE LISTAGEM E REMOÇÃO */}
        <div className="lista">
          {vaga.diferenciais.map((dif, index) => (
            <div key={index}>
              <span>{dif}</span>
              <button type="button" onClick={() => removerItem("diferenciais", index)}>
                x
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}