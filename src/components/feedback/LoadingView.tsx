import styles from "@/styles/feedback.module.css"

export function LoadingView() {

  return (
    <div className="flex flex-col items-center justify-center gap-5 py-12">
      <div className={styles.loadingSpinner}></div>

      <div className="flex flex-col items-center gap-2 text-center">
        <h2 className="font-semibold text-gray-700 animate-pulse">
          Analisando Currículo...
        </h2>
        <p className="text-sm text-gray-500">
          A inteligência artificial está mapeando suas competências.
        </p>
      </div>
    </div>
  )
}