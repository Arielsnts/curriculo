import { analisarCurriculo } from './src/app/actions'
import { VagaInput } from './src/types'

async function rodarTeste() {
    console.log("Iniciando teste da Server Action com o Gemini...\n");

    const vagaDeTeste: VagaInput = {
        title: "Desenvolvedor Front-end React Júnior",
        requisitos: ["React", "TypeScript", "TailwindCSS"],
        competencias: ["Comunicação assertiva", "Metodologias Ágeis"],
        diferenciais: ["Next.js", "Consumo de APIs GraphQL"]
    };

    const curriculoDeTeste = `
    Nome: João Silva
    Objetivo: Atuar como desenvolvedor Front-end.
    Experiência: 1 ano trabalhando com desenvolvimento web criando interfaces responsivas com HTML, CSS e JavaScript puro. 
    Conhecimentos: Estou estudando React e já sei o básico de TypeScript. Gosto de trabalhar em equipe.
    `;

    const formData = new FormData();
    formData.append('vaga', JSON.stringify(vagaDeTeste));
    formData.append('tipoCurriculo', 'text');
    formData.append('textoCurriculo', curriculoDeTeste);

    try {
        const resultado = await analisarCurriculo(formData);

        console.log("ANÁLISE CONCLUÍDA COM SUCESSO!\n");
        console.log(JSON.stringify(resultado, null, 2));

    } catch (error: any) {
        console.error("\nO Teste falhou devido a um erro:");
        console.error(error.message);
    }
}

rodarTeste();