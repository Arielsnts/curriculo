import { AnaliseOutput } from "@/types"
import styles from "@/styles/animation.module.css"

type OutputProp = {
  resposta: AnaliseOutput
}

export function OutputComponent({ resposta }: OutputProp) {
  const dados: AnaliseOutput = resposta

  if (dados.pontosFortes.length === 0) {
    dados.pontosFortes.push("Não há pontos fortes.")
  }

  if (dados.pontosFracos.length === 0) {
    dados.pontosFracos.push("Não há pontos a melhorar.")
  }
  
  if (dados.recomendacoes.length === 0) {
    dados.recomendacoes.push("Não há recomendações.")
  }

  return (
    <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto">
      <div className="text-center pb-4">
        <h1 className="font-bold text-2xl text-gray-800">
          Resultado da Análise
        </h1>
      </div>

      <div className={`flex flex-col items-center gap-2 ${styles.animateCascade} ${styles.delay1}`}>
        <span className="font-bold text-5xl text-blue-600">{dados.score}%</span>
        <span className="text-sm font-medium text-gray-500">Aderência à vaga</span>
      </div>

      <div className={`flex flex-col gap-2 ${styles.animateCascade} ${styles.delay2}`}>
        <h2 className="font-bold text-gray-800">Resumo Geral</h2>
        <p className="text-sm text-justify leading-relaxed text-gray-600">{dados.resumo}</p>
      </div>

      <div className={`flex flex-col gap-2 ${styles.animateCascade} ${styles.delay3}`}>
        <h2 className="font-bold text-gray-800">Pontos Fortes</h2>
        <ul className="flex flex-col gap-1.5">
          {dados.pontosFortes.map((ponto, index) => (
            <li key={index} className="ml-5 text-sm text-gray-600 flex items-start gap-2">
              <span className="text-blue-600">•</span>
              <span>{ponto}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={`flex flex-col gap-2 ${styles.animateCascade} ${styles.delay4}`}>
        <h2 className="font-bold text-gray-800">Pontos a Melhorar</h2>
        <ul className="flex flex-col gap-1.5">
          {dados.pontosFracos.map((ponto, index) => (
            <li key={index} className="ml-5 text-sm text-gray-600 flex items-start gap-2">
              <span className="text-blue-600">•</span>
              <span>{ponto}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={`flex flex-col gap-2 ${styles.animateCascade} ${styles.delay5}`}>
        <h2 className="font-bold text-gray-800">Recomendações</h2>
        <ul className="flex flex-col gap-1.5">
          {dados.recomendacoes.map((recomendacao, index) => (
            <li key={index} className="ml-5 text-sm text-gray-600 flex items-start gap-2">
              <span className="text-blue-600">•</span>
              <span>{recomendacao}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}