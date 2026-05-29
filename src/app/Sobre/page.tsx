// app/sobre/page.tsx

import Link from 'next/link'

export default function Page() {
  return (
    <div className="flex flex-col gap-8 max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <div className="text-center pb-6">
        <h1 className="font-bold text-2xl sm:text-3xl text-gray-800">
          Sobre o Projeto
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          Análise de currículos com Inteligência Artificial
        </p>
      </div>

      {/* Descrição do Projeto */}
      <section className="flex flex-col gap-3">
        <h2 className="font-bold text-lg text-gray-800 flex items-center gap-2">
          <span className="w-1 h-5 bg-blue-500 rounded-full"></span>
          O que é?
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          Este projeto foi desenvolvido para demonstrar a integração entre Inteligência Artificial 
          e uma aplicação web prática. A ferramenta permite que você cole uma descrição de vaga 
          e seu currículo (em texto ou PDF) para que a IA analise a aderência do seu perfil aos 
          requisitos da oportunidade.
        </p>
      </section>

      {/* Como funciona */}
      <section className="flex flex-col gap-4">
        <h2 className="font-bold text-lg text-gray-800 flex items-center gap-2">
          <span className="w-1 h-5 bg-blue-500 rounded-full"></span>
          Como funciona?
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
              1
            </div>
            <h3 className="font-semibold text-sm text-gray-800">Insira a Vaga</h3>
            <p className="text-xs text-gray-500 mt-1">
              Cole os requisitos e responsabilidades da vaga desejada
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
              2
            </div>
            <h3 className="font-semibold text-sm text-gray-800">Adicione seu Currículo</h3>
            <p className="text-xs text-gray-500 mt-1">
              Cole o texto ou faça upload de um arquivo PDF
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
              3
            </div>
            <h3 className="font-semibold text-sm text-gray-800">Receba a Análise</h3>
            <p className="text-xs text-gray-500 mt-1">
              A IA calcula a aderência e sugere melhorias
            </p>
          </div>
        </div>
      </section>

      {/* Tecnologias */}
      <section className="flex flex-col gap-3">
        <h2 className="font-bold text-lg text-gray-800 flex items-center gap-2">
          <span className="w-1 h-5 bg-blue-500 rounded-full"></span>
          Tecnologias Utilizadas
        </h2>
        
        <div className="flex flex-wrap gap-2">
          {[
            'Next.js 14',
            'React',
            'TypeScript',
            'Tailwind CSS',
            'Gemini API (Google)',
            'PDF Parsing',
            'Server Actions'
          ].map((tech) => (
            <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Objetivo de Aprendizado */}
      <section className="flex flex-col gap-3">
        <h2 className="font-bold text-lg text-gray-800 flex items-center gap-2">
          <span className="w-1 h-5 bg-blue-500 rounded-full"></span>
          Objetivo Educacional
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          Este projeto foi criado com fins educacionais para demonstrar:
        </p>
        <ul className="flex flex-col gap-1.5 pl-4">
          <li className="text-sm text-gray-600 flex items-start gap-2">
            <span className="text-blue-500">•</span>
            <span>Integração com APIs de IA (Google Gemini)</span>
          </li>
          <li className="text-sm text-gray-600 flex items-start gap-2">
            <span className="text-blue-500">•</span>
            <span>Manipulação de formulários e upload de arquivos no Next.js</span>
          </li>
          <li className="text-sm text-gray-600 flex items-start gap-2">
            <span className="text-blue-500">•</span>
            <span>Server Actions para processamento seguro no backend</span>
          </li>
          <li className="text-sm text-gray-600 flex items-start gap-2">
            <span className="text-blue-500">•</span>
            <span>Extração de texto de PDFs</span>
          </li>
          <li className="text-sm text-gray-600 flex items-start gap-2">
            <span className="text-blue-500">•</span>
            <span>Design responsivo com Tailwind CSS</span>
          </li>
        </ul>
      </section>

      {/* Aviso de Dados */}
      <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
        <div className="flex gap-3">
          <div className="flex-1">
            <h3 className="font-semibold text-sm text-amber-800">Aviso sobre dados</h3>
            <p className="text-xs text-amber-700 mt-1 leading-relaxed">
              Este projeto utiliza a API do Google Gemini para processar os textos enviados. 
              Os dados são enviados de forma segura para a API, mas não armazenamos nenhum 
              currículo ou informação pessoal. Recomendamos remover dados sensíveis antes de 
              realizar as análises. Este é um projeto educacional e não deve ser usado para 
              avaliações reais sem validação adicional.
            </p>
          </div>
        </div>
      </div>

      {/* Botão de Voltar */}
      <div className="flex justify-center pt-4">
        <Link
          href="/"
          className="px-6 py-2 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors duration-200"
        >
          Voltar para Análise
        </Link>
      </div>
    </div>
  )
}