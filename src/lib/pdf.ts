import { PDFParse } from 'pdf-parse'

/**
 * Função que extrai o texto de um arquivo tipo File e retorna uma string limpa
 */
export async function extrairTextoDePDF(arquivo: File): Promise<string> {
    try {
        const arrayBuffer = await arquivo.arrayBuffer()
        
        const dadosBinarios = new Uint8Array(arrayBuffer)

        const pdf = new PDFParse(dadosBinarios)

        const resultado = await pdf.getText()

        const textoBruto = resultado.text || ""
        const textoLimpo = textoBruto.trim()

        if (!textoLimpo) {
            throw new Error("O arquivo PDF parece estar vazio ou não contém texto extraível.")
        }

        return textoLimpo

    } catch (error: any) {
        console.error("Erro na extração do PDF com a classe PDFParse:", error)
        throw new Error("Falha ao ler o arquivo PDF. Certifique-se de que é um documento digital com texto selecionável.")
    }
}