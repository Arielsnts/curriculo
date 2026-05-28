import { View } from "@/app/page"
import styles from "@/styles/general.module.css"

type ErrorProps = {
  setView: React.Dispatch<React.SetStateAction<View>>
  erroResposta: string
}

export function ErrorView({setView, erroResposta}: ErrorProps) {

  return (
    <div className="flex flex-col items-center justify-center gap-5 text-center py-12 animate-cascade delay-1">
      <h2 className="text-xl font-bold text-gray-900">Algo deu errado</h2>
      <p className="text-sm text-gray-600 max-w-md leading-relaxed">{erroResposta}</p>
      <button onClick={() => setView("input")} type="button" className={styles.buttonWhite}>
        Tentar Novamente
      </button>
    </div>
  )
}