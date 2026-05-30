import { VagaInput } from "@/types"
import { useState } from "react"
import { LIMITES } from "@/constants"
import styles from "@/styles/input.module.css"

interface vagaProps {
  vaga: VagaInput
  setVaga: React.Dispatch<React.SetStateAction<VagaInput>>
  setErroForm: React.Dispatch<React.SetStateAction<string>>
}

export function VagaInputComponent({ vaga, setVaga, setErroForm }: vagaProps) {
  const [requisito, setRequisito] = useState("")
  const [competencia, setCompetencia] = useState("")
  const [diferencial, setDiferencial] = useState("")

  function validarTag(tag: string, tipo: string): boolean {
    // Limpa erro anterior se houver
    setErroForm("")

    if (tag.length < LIMITES.MIN_CARACTERES_TAG) {
      setErroForm(`A ${tipo} deve ter no mínimo ${LIMITES.MIN_CARACTERES_TAG} caracteres! "${tag}" é muito curto.`)
      return false
    }

    if (tag.length > LIMITES.MAX_CARACTERES_TAG) {
      setErroForm(`A ${tipo} deve ter no máximo ${LIMITES.MAX_CARACTERES_TAG} caracteres! "${tag.substring(0, 20)}..." excede o limite.`)
      return false
    }

    return true
  }

  function addRequisito() {
    if (!requisito.trim()) return

    if (!validarTag(requisito.trim(), "requisito")) return

    if (vaga.requisitos.length >= LIMITES.MAX_TAGS_POR_CATEGORIA) {
      setErroForm(`Máximo de ${LIMITES.MAX_TAGS_POR_CATEGORIA} requisitos permitidos!`)
      return
    }

    setVaga({ ...vaga, requisitos: [...vaga.requisitos, requisito.trim()] })
    setRequisito("")
    setErroForm("") // Limpa erro após adicionar com sucesso
  }

  function addCompetencia() {
    if (!competencia.trim()) return

    if (!validarTag(competencia.trim(), "competência")) return

    if (vaga.competencias.length >= LIMITES.MAX_TAGS_POR_CATEGORIA) {
      setErroForm(`Máximo de ${LIMITES.MAX_TAGS_POR_CATEGORIA} competências permitidas!`)
      return
    }

    setVaga({ ...vaga, competencias: [...vaga.competencias, competencia.trim()] })
    setCompetencia("")
    setErroForm("") // Limpa erro após adicionar com sucesso
  }

  function addDiferencial() {
    if (!diferencial.trim()) return

    if (!validarTag(diferencial.trim(), "diferencial")) return

    if (vaga.diferenciais.length >= LIMITES.MAX_TAGS_POR_CATEGORIA) {
      setErroForm(`Máximo de ${LIMITES.MAX_TAGS_POR_CATEGORIA} diferenciais permitidos!`)
      return
    }

    setVaga({ ...vaga, diferenciais: [...vaga.diferenciais, diferencial.trim()] })
    setDiferencial("")
    setErroForm("") // Limpa erro após adicionar com sucesso
  }

  function removerItem(lista: "requisitos" | "competencias" | "diferenciais", indexParaRemover: number) {
    setVaga({
      ...vaga,
      [lista]: vaga[lista].filter((_, index) => index !== indexParaRemover)
    })
    setErroForm("") // Limpa erro ao remover item
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-center text-lg text-[#1f2937]">Vaga</h2>

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
        <div className={styles.tag}>
          {vaga.requisitos.map((req, index) => (
            <div key={index}>
              <span>{req}</span>
              <button className={styles.removeTag} type="button" onClick={() => removerItem("requisitos", index)}>
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
        <div className={styles.tag}>
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
        <div className={styles.tag}>
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