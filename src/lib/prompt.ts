import { Type } from '@google/genai'
import { VagaInput } from '@/types';

/**
 * Schema estruturado que força o Gemini a responder EXATAMENTE 
 * no formato da interface AnaliseOutput.
 */
export const analiseResponseSchema = {
    type: Type.OBJECT,
    properties: {
        score: { 
            type: Type.INTEGER, 
            description: "Um número inteiro de 0 a 100 indicando a compatibilidade do currículo com os requisitos da vaga." 
        },
        resumo: { 
            type: Type.STRING, 
            description: "Um resumo executivo profissional (máximo 3 frases) avaliando o fit cultural e técnico do candidato." 
        },
        pontosFortes: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "Lista de competências, tecnologias ou experiências que o candidato possui e que alinham perfeitamente com a vaga." 
        },
        pontosFracos: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "Lista de requisitos, competências ou diferenciais exigidos pela vaga que NÃO foram encontrados ou estão muito superficiais no currículo." 
        },
        recomendacoes: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "Dicas práticas, acionáveis e diretas de como o candidato pode melhorar o currículo especificamente para esta vaga (ex: adicionar projetos, destacar termos técnicos)." 
        }
    },
    required: ["score", "resumo", "pontosFortes", "pontosFracos", "recomendacoes"]
}

/**
 * Instrução de sistema que define o comportamento, tom e regras do Gemini.
 */
export const SYSTEM_INSTRUCTION = `
Você é um Tech Recruiter e Especialista em RH sênior com anos de experiência em ATS (Applicant Tracking Systems). 
Sua tarefa é fazer uma análise fria, puramente técnica e extremamente precisa comparando o currículo de um candidato com os dados estruturados de uma vaga de emprego.

Diretrizes estritas para a análise:
1. Seja realista e rigoroso no 'score' (pontuação). Não infle a nota por simpatia. Se faltam requisitos cruciais, a nota deve refletir isso.
2. Não invente dados. Se uma tecnologia ou competência não está explícita ou fortemente implícita no currículo, trate-a como ausente (ponto fraco).
3. Nas recomendações, seja direto e prático. Diga exatamente o que o usuário deve alterar, adicionar ou dar ênfase no texto do seu currículo.
4. Mantenha o tom profissional, corporativo, construtivo e em português do Brasil.
`;

/**
 * Função auxiliar para montar a mensagem (prompt) combinando os dados da vaga e do currículo.
 */
export function gerarPrompt(vaga: VagaInput, curriculoTexto: string): string {
    return `
Analise a compatibilidade do currículo fornecido com a vaga de emprego descrita abaixo.

--- DADOS DA VAGA ---
Título: ${vaga.title}
Requisitos Obrigatórios: ${vaga.requisitos.join(', ')}
Competências Desejadas: ${vaga.competencias.join(', ')}
Diferenciais: ${vaga.diferenciais.join(', ')}

--- CURRÍCULO DO CANDIDATO ---
${curriculoTexto}
`;
}