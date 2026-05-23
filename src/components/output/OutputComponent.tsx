
import { AnaliseOutput } from "@/types"

type OutputProp = {
    resposta: AnaliseOutput
}

export function OutputComponent({resposta}: OutputProp) {

    return (
        <div>
            <p>Score: {resposta.score}</p>
        </div>
    )
}