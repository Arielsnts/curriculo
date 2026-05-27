import { VagaInput } from "@/types"

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