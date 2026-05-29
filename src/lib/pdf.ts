import 'server-only'

import 'pdf-parse/worker'
import { PDFParse } from "pdf-parse"

/**
 * Função que extrai o texto de um arquivo tipo File e retorna uma string limpa
 */
export async function extrairTextoDePDF(arquivo: File): Promise<string> {
    try {
        const buffer = await arquivo.arrayBuffer()


        const parser = new PDFParse({ data: buffer })

        const data = await parser.getText()

        const resultado = data.text.trim()

        await parser.destroy()

        return resultado
    }
    catch (e) {
        console.error("Erro ao tentar processar o PDF!" + e)

        throw new Error("Erro ao tentar processar o PDF!")
    }

}