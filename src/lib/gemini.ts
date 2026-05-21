import { GoogleGenAI } from '@google/genai'
import { AnaliseOutput } from '@/types'
import { SYSTEM_INSTRUCTION, analiseResponseSchema } from './prompt'

const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY})

/**
 * Envia o prompt formatado para o Gemini e garante um retorno tipado como AnaliseOutput
 */
export async function executarAnalise(promptTexto: string): Promise<AnaliseOutput> {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-lite', 
            contents: promptTexto,
            config: {
                systemInstruction: SYSTEM_INSTRUCTION,
                responseMimeType: 'application/json',
                responseSchema: analiseResponseSchema,
                temperature: 0.2, 
            }
        })

        const jsonTexto = response.text

        if (!jsonTexto) {
            throw new Error("A API do Gemini retornou um conteúdo vazio.")
        }

        const resultadoFormatado: AnaliseOutput = JSON.parse(jsonTexto)

        return resultadoFormatado

    } catch (error: any) {
        console.error("Erro na camada lib/gemini.ts:", error)
        
        if (error.status === 503 || error.status === 429) {
            throw new Error("O servidor de inteligência artificial está muito carregado no momento. Por favor, tente novamente em alguns segundos.")
        }

        throw new Error(error.message || "Falha interna ao processar a análise com a IA.")
    }
}