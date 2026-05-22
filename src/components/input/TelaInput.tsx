import { VagaInputComponent } from "./VagaInputComponent"
import { CurriculoInputComponent } from "./CurriculoInputComponent"
import { VagaInput } from "@/types"
import { useState } from "react"

export function TelaInput() {
    const [loading, setLoading] = useState(false)

    const [vaga, setVaga] = useState<VagaInput>({
        title: '',
        requisitos: [],
        competencias: [],
        diferenciais: []
    })

    function handleFormSubmit(formData: FormData) {
        setLoading(true)

        try {
            formData.append('vaga', JSON.stringify(vaga))

            // chamada da action

            // passar os dados pra TelaOutput
        }
        catch (e) {
            console.error(e)
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex flex-col gap-5 w-200 p-6">
            <h1 className="font-bold text-center text-xl">Analise o seu Currículo!</h1>

            <p className="text-center text-[#374151]">Compare a aderência do seu perfil profissional com os requisitos da vaga utilizando Inteligência Artificial. Suporta texto ou arquivos em PDF.</p>

            <form action={handleFormSubmit} className="flex flex-col gap-8">
                <VagaInputComponent vaga={vaga} setVaga={setVaga}/>

                <CurriculoInputComponent />
                
                <button>Analisar</button>
            </form>
        </div>
    )
}