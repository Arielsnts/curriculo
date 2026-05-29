// Interfaces que estruturam os objetos que serão utilizados pelo sistema

/**
 * Representa os dados da vaga estruturados pelo usuário no formulário.
 */
export interface VagaInput {
    requisitos: string[]
    competencias: string[]
    diferenciais: string[]
}

/**
 * Representa o formato exato do JSON que a API do GEMINI deve retornar
 */
export interface AnaliseOutput {
    score: number

    resumo: string

    pontosFortes: string[]

    pontosFracos: string[]

    recomendacoes: string[]
}

/**
 * Representa a resposta a ser enviada pela server action analisarCurriculo
 */
export type AnalisarCurriculoResponse = {
    success: true
    data: AnaliseOutput
} | {
    success: false
    message: string
}