import { AnaliseOutput } from "@/types"
import styles from "@/styles/animation.module.css"

type OutputProp = {
    resposta: AnaliseOutput
}

export function OutputComponent({ resposta }: OutputProp) {
    const dados: AnaliseOutput = resposta

    return (
        <div className="flex flex-col gap-6 w-full">
            <h1 className="font-bold text-xl text-center">
                Resultado da Análise
            </h1>

            <div className={`flex flex-col items-center gap-2 ${styles.animateCascade} ${styles.delay1}`}>
                <span className="font-bold text-3xl">{dados.score}%</span>
                <span className="text-sm text-gray-500">Aderência à vaga</span>
            </div>

            <div className={`flex flex-col gap-2 ${styles.animateCascade} ${styles.delay2}`}>
                <h2 className="font-bold text-lg">Resumo Geral</h2>
                <p className="text-sm leading-relaxed text-gray-700">{dados.resumo}</p>
            </div>

            <div className={`flex flex-col gap-2 ${styles.animateCascade} ${styles.delay3}`}>
                <h2 className="font-bold text-lg">Pontos Fortes</h2>
                <ul className="list-disc pl-5 flex flex-col gap-1">
                    {dados.pontosFortes.map((ponto, index) => (
                        <li key={index} className="text-sm text-gray-700">{ponto}</li>
                    ))}
                </ul>
            </div>

            <div className={`flex flex-col gap-2 ${styles.animateCascade} ${styles.delay4}`}>
                <h2 className="font-bold text-lg">Pontos a Melhorar</h2>
                <ul className="list-disc pl-5 flex flex-col gap-1">
                    {dados.pontosFracos.map((ponto, index) => (
                        <li key={index} className="text-sm text-gray-700">{ponto}</li>
                    ))}
                </ul>
            </div>

            <div className={`flex flex-col gap-2 ${styles.animateCascade} ${styles.delay5}`}>
                <h2 className="font-bold text-lg">Recomendações</h2>
                <ul className="list-disc pl-5 flex flex-col gap-1">
                    {dados.recomendacoes.map((recomendacao, index) => (
                        <li key={index} className="text-sm text-gray-700">{recomendacao}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}