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
 * Representa a entrada do currículo do usuário.
 */
export interface CurriculoInput {
    type: "text" | "pdf"
    content: string
}

/**
 * Representa a união dos objetos de input VagaInput e CurriculoInput
 */
export interface AnaliseInput {
    vaga: VagaInput
    curriculo: CurriculoInput
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

