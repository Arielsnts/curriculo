'use server'

import { VagaInput } from "@/types"
// import { extrairTextoDePDF } from "@/lib/pdf"
import { gerarPrompt } from "@/lib/prompt"
import { executarAnalise } from "@/lib/gemini"

/**
 * Server Action que recebe dados de um FormData, monta o prompt, faz uma requisição pra IA e retorna um objeto AnaliseOutput
 */
export async function analisarCurriculo(formData: FormData) {
    try {
        // dados da vaga
        const vagaJSON = formData.get('vaga') as string
        if (!vagaJSON) {
            throw new Error("Os dados da vaga não foram fornecidos!")
        }
        const vaga: VagaInput = JSON.parse(vagaJSON)

        // dados do currículo
        const tipoCurriculo = formData.get('tipoCurriculo') as string
        let textoCurriculo: string

        // if (tipoCurriculo === 'pdf') {
        //     const arquivoCurriculo = formData.get('arquivoCurriculo') as File

        //     if (!arquivoCurriculo || arquivoCurriculo.size === 0) {
        //         throw new Error("Nenhum arquivo PDF foi enviado!")
        //     }

        //     textoCurriculo = await extrairTextoDePDF(arquivoCurriculo)
        // }
        // else {
        const texto = formData.get('textoCurriculo') as string

        if (!texto.trim()) {
            throw new Error("Nenhum texto foi enviado!")
        }

        textoCurriculo = texto.trim()
        // }

        // geração do prompt
        const prompt = gerarPrompt(vaga, textoCurriculo)

        // requisição e análise do GEMINI
        const resultado = await executarAnalise(prompt)

        return resultado
    }
    catch (e) {
        console.error("Erro na Server Action analisarCurriculo:" + e)

        throw new Error("Erro interno ao processar sua informação!")
    }
}