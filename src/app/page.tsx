'use client'

import { useState } from "react"
import { newText } from "./actions/newText"

export default function Home() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('Sua resposta aparecerá aqui')
  const [loading, setLoading] = useState(false)

  async function handleClick() {
    if (!inputText.trim()) return

    setLoading(true)
    try {
      const result = await newText(inputText)

      setOutputText(result)
    }
    catch (e) {
      setOutputText("Ocorreu um erro!" + e)
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <div className={`flex flex-col h-full w-100 p-4 gap-4 bg-white rounded-[10px] shadow-lg`}>
      <h1 className="w-full text-center text-xl">Teste</h1>

      <textarea 
        onChange={(e) => setInputText(e.target.value)}
        name="input" 
        id="input"
        className="p-2 bg-gray-300 rounded-lg"
      ></textarea>
      
      <button 
        onClick={handleClick}
        disabled={loading}
        className="p-4 cursor-pointer bg-gray-300 rounded-lg hover:bg-gray-400 transition duration-300"
      >
        {loading ? 'Enviando...' : 'Enviar'}
      </button>
      
      <p 
        className="text-justify"
      >
        {outputText}
      </p>
    </div>
  )
}
