import { VagaInput, AnaliseOutput } from "@/types"

export const DADOS_EXEMPLO_VAGA: VagaInput = {
  requisitos: [
    "Experiência mínima de 2 anos com React e Next.js",
    "Domínio de TypeScript",
    "Conhecimento em Tailwind CSS"
  ],
  competencias: [
    "Arquitetura de Front-end",
    "Consumo de APIs RESTful",
    "Estado global com Context API ou Zustand"
  ],
  diferenciais: [
    "Conhecimento em Server Actions do Next.js",
    "Testes unitários com Jest ou Vitest"
  ]
}

export const TEXTO_EXEMPLO_CURRICULO = `Desenvolvedor Front-end focado no ecossistema React. Tenho 3 anos de experiência construindo aplicações web modernas utilizando Next.js, TypeScript e Tailwind CSS. Tenho facilidade em integrar APIs complexas e trabalhar com componentes reutilizáveis.`

export const RESPOSTA_TESTE: AnaliseOutput = {
  score: 25,
  resumo: "O candidato demonstra interesse na área de Front-end e possui uma base em HTML, CSS e JavaScript. No entanto, a experiência com as tecnologias essenciais da vaga (React, TypeScript, TailwindCSS) é incipiente ou inexistente, limitando o alinhamento técnico atual.",
  pontosFortes: [
    "Experiência com desenvolvimento web utilizando HTML, CSS e JavaScript puro.",
    "Indicação de estudo em React e conhecimento básico de TypeScript.",
    "Interesse em atuar como desenvolvedor Front-end."
  ],
  pontosFracos: [
    "Experiência com React é básica e não comprovada em projetos.",
    "Conhecimento em TypeScript é básico e não aplicado.",
    "Ausência de menção ao uso de TailwindCSS.",
    "Falta de experiência comprovada com Metodologias Ágeis.",
    "Ausência de menção a Next.js.",
    "Ausência de menção ao consumo de APIs GraphQL.",
    "Comunicação assertiva não é mencionada ou demonstrada."
  ],
  recomendacoes: [
    "Detalhar o estudo em React, mencionando projetos pessoais ou cursos concluídos, mesmo que pequenos.",
    "Expandir e aplicar o conhecimento em TypeScript em projetos práticos, evidenciando o uso.",
    "Incluir o uso de TailwindCSS em projetos, mesmo que em exemplos de estudo.",
    "Adicionar experiência ou conhecimento em Metodologias Ágeis (Scrum, Kanban), se houver.",
    "Se houver familiaridade com Next.js, mesmo que básica, incluir no currículo.",
    "Mencionar qualquer experiência com consumo de APIs, especialmente se for GraphQL.",
    "Destacar a habilidade de comunicação assertiva, se aplicável, em uma seção de competências ou soft skills."
  ]
}

export const LIMITES = {
  // Tags
  MAX_TAGS_POR_CATEGORIA: 10,
  MAX_CARACTERES_TAG: 40,
  MIN_CARACTERES_TAG: 2,
  
  // Currículo texto
  MAX_CARACTERES_CURRICULO_TEXTO: 5000,
  MIN_CARACTERES_CURRICULO_TEXTO: 50,
  
  // PDF
  MAX_TAMANHO_PDF_MB: 5,
  MAX_TAMANHO_PDF_BYTES: 5 * 1024 * 1024, // 5MB
}