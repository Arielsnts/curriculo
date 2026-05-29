'use server'

import { VagaInput, AnalisarCurriculoResponse } from "@/types"
import { gerarPrompt } from "@/lib/prompt"
import { executarAnalise } from "@/lib/gemini"

/**
 * Server Action que recebe dados de um FormData, monta o prompt, faz uma requisição pra IA e retorna um objeto AnalisarCurriculoResponse
 */
export async function analisarCurriculo(
    formData: FormData
): Promise<AnalisarCurriculoResponse> {
    try {
        // dados da vaga
        const vagaJSON = formData.get('vaga') as string
        if (!vagaJSON) {
            return {
                success: false,
                message: "Dados da vaga não foram fornecidos. Por favor, preencha os requisitos da vaga.",

            }
        }

        let vaga: VagaInput
        try {
            vaga = JSON.parse(vagaJSON)
        } catch {
            return {
                success: false,
                message: "Formato dos dados da vaga inválido. Por favor, recrie a vaga.",

            }
        }

        // dados do currículo
        // const tipoCurriculo = formData.get('tipoCurriculo') as string
        const textoCurriculo = formData.get('textoCurriculo') as string
        if (!textoCurriculo || !textoCurriculo.trim()) {
            return {
                success: false,
                message: "Texto do currículo não foi fornecido. Por favor, digite ou envie um arquivo PDF.",

            }
        }

        // geração do prompt
        const prompt = gerarPrompt(vaga, textoCurriculo.trim())

        // requisição e análise do GEMINI
        const resultado = await executarAnalise(prompt)

        return {
            success: true,
            data: resultado
        }
    }
    catch (e: any) {
        console.error("Erro na Server Action analisarCurriculo:" + e)

        const errorMessage = e.message || "Erro interno ao processar sua solicitação."

        let userMessage = errorMessage

        if (errorMessage.includes("muito carregado") || errorMessage.includes("503") || errorMessage.includes("429")) {
            userMessage = "O serviço de IA está com muita demanda no momento. Por favor, aguarde alguns segundos e tente novamente."
        }
        else if (errorMessage.includes("conteúdo vazio") || errorMessage.includes("JSON")) {
            userMessage = "A IA retornou uma resposta inesperada. Por favor, tente novamente."
        }
        else if (errorMessage.includes("timeout") || errorMessage.includes("tempo")) {
            userMessage = "A análise está demorando mais que o esperado. Por favor, tente novamente."
        }
        else if (errorMessage.includes("API key") || errorMessage.includes("autenticação")) {
            userMessage = "Erro de configuração do serviço de IA. Por favor, contate o suporte."
        }

        return {
            success: false,
            message: userMessage
        }
    }
}