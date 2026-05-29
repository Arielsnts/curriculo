// lib/gemini.ts
import { GoogleGenAI } from '@google/genai'
import { AnaliseOutput } from '@/types'
import { SYSTEM_INSTRUCTION, analiseResponseSchema } from './prompt'

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })

const MODELOS = ['gemini-2.5-flash', 'gemini-2.5-flash-lite'] as const

export async function executarAnalise(promptTexto: string): Promise<AnaliseOutput> {
    const erros: string[] = []

    for (const modelo of MODELOS) {
        try {
            console.log(`Tentando ${modelo}...`)

            const response = await ai.models.generateContent({
                model: modelo,
                contents: promptTexto,
                config: {
                    systemInstruction: SYSTEM_INSTRUCTION,
                    responseMimeType: 'application/json',
                    responseSchema: analiseResponseSchema,
                    temperature: 0.2,
                }
            })

            const jsonTexto = response.text
            if (!jsonTexto) throw new Error(`Conteúdo vazio do ${modelo}`)

            const resultado = JSON.parse(jsonTexto)
            console.log(`Sucesso com ${modelo}`)
            return resultado

        } catch (error: any) {
            console.error(`Erro no ${modelo}:`, error.message || error)
            erros.push(`${modelo}: ${error.message}`)

            if (modelo === MODELOS[MODELOS.length - 1]) {
                if (error.status === 429 || error.status === 503 ||
                    error.message?.includes("429") || error.message?.includes("503")) {
                    throw new Error("O servidor de inteligência artificial está muito carregado. Tente novamente em alguns segundos.")
                }

                throw new Error(`Todos os modelos falharam. Último erro: ${error.message || "Erro desconhecido"}`)
            }
        }
    }

    throw new Error(`Falha ao processar análise. Erros: ${erros.join('; ')}`)
}