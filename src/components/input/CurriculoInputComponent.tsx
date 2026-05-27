import { useState } from "react"
import styles from "@/styles/input.module.css"
import "@/styles/pdf.css"
type InputType = "text" | "pdf"

export function CurriculoInputComponent() {
  const [inputType, setInputType] = useState<InputType>("text")

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-center text-xl">Currículo</h2>

      <input type="hidden" name="tipoCurriculo" value={inputType} />

      {inputType === "text" && (
        <div className={`${styles.inputText} flex flex-col gap-4`}>
          <label htmlFor="textoCurriculo">Digite o texto do seu Currículo:</label>
          <textarea placeholder="Currículo em Texto" name="textoCurriculo" id="textoCurriculo" required></textarea>
          <button onClick={() => setInputType("pdf")} type="button">Mudar para PDF</button>
        </div>
      )}

      {inputType === "pdf" && (
        <div className="flex flex-col gap-4">
          <label htmlFor="arquivoCurriculo">Faça upload do seu Currículo (PDF):</label>
          <input 
            type="file" 
            name="arquivoCurriculo" 
            id="arquivoCurriculo" 
            accept=".pdf" 
            required 
          />
          <button onClick={() => setInputType("text")} type="button">Mudar para Texto</button>
        </div>
      )}
      
    </div>
  )
}