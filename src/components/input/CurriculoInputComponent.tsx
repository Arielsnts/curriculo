import { useState } from "react"
import '../../app/styles.css'

type InputType = "escolha" | "text" | "pdf"

export function CurriculoInputComponent() {
  const [inputType, setInputType] = useState<InputType>("escolha")

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-center text-xl">Currículo</h2>

      <input type="hidden" name="tipoCurriculo" value={inputType} />

      {inputType === "escolha" && (
        <div className="flex flex-col gap-4">
          <p>Escolha entre texto ou PDF:</p>
          <button onClick={() => setInputType("text")} type="button">Texto</button>
          <button onClick={() => setInputType("pdf")} type="button">PDF</button>
        </div>
      )}

      {inputType === "text" && (
        <div className="flex flex-col gap-4">
          <label htmlFor="textoCurriculo">Digite o texto do seu Currículo:</label>
          <textarea placeholder="Currículo em Texto" name="textoCurriculo" id="textoCurriculo" required></textarea>
          <button onClick={() => setInputType("escolha")} type="button">Voltar</button>
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
          <button onClick={() => setInputType("escolha")} type="button">Voltar</button>
        </div>
      )}
      
    </div>
  )
}