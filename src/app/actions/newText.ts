'use server'

import { GoogleGenAI } from '@google/genai'

// Inicializa o SDK. Ele busca automaticamente a variável GEMINI_API_KEY do seu .env.local
const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY})

export async function newText(text: string) {
    try {
        // Faz a chamada oficial para a API do Gemini
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-lite',
            contents: text,
        })

        // Retorna o texto gerado pela IA. 
        // Se por algum motivo vier vazio, usamos um fallback string.
        return response.text || "O Gemini não retornou nenhum texto."
    } 
    catch (error: any) {
        console.error("Erro na API do Gemini:", error)
        // Lança o erro para que o bloco catch da sua Home consiga capturar e mostrar na tela
        throw new Error(error.message || "Erro interno ao processar o Gemini.")
    }
}