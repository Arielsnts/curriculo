// app/contato/page.tsx

import Link from 'next/link'
import { SiGithub } from "react-icons/si"
import { FaLinkedin } from "react-icons/fa6"
import { HiOutlineMail } from "react-icons/hi"
import { HiOutlineExternalLink } from "react-icons/hi"

export default function Page() {
  return (
    <div className="flex flex-col gap-8 max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <div className="text-center pb-6">
        <h1 className="font-bold text-2xl sm:text-3xl text-gray-800">
          Contato
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          Fique à vontade para entrar em contato
        </p>
      </div>

      {/* Cards de Contato */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email */}
        <div className="flex items-center gap-4 bg-gray-50 rounded-lg p-4 border border-gray-100">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <HiOutlineMail className="text-blue-600 text-xl" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-sm text-gray-800">Email</h3>
            <a 
              href="mailto:arielsant520@gmail.com"
              className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              arielsant520@gmail.com
            </a>
          </div>
        </div>

        {/* Portfólio */}
        <div className="flex items-center gap-4 bg-gray-50 rounded-lg p-4 border border-gray-100">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <HiOutlineExternalLink className="text-blue-600 text-xl" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-sm text-gray-800">Portfólio</h3>
            <a 
              href="https://ariel-santos.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-purple-600 transition-colors flex items-center gap-1"
            >
              ariel-santos.vercel.app
              <HiOutlineExternalLink className="text-xs" />
            </a>
          </div>
        </div>
      </div>

      {/* Redes Sociais */}
      <section className="flex flex-col gap-4">
        <h2 className="font-bold text-lg text-gray-800 flex items-center gap-2">
          <span className="w-1 h-5 bg-blue-500 rounded-full"></span>
          Redes Sociais
        </h2>
        
        <div className="flex gap-4 justify-center sm:justify-start">
          <a
            href="https://www.linkedin.com/in/ariel-santos-souza-998b8b31a"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-200"
          >
            <FaLinkedin size={20} />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
          
          <a
            href="https://github.com/Arielsnts"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-lg text-gray-700 hover:bg-gray-800 hover:text-white hover:border-gray-700 transition-all duration-200"
          >
            <SiGithub size={18} />
            <span className="text-sm font-medium">GitHub</span>
          </a>
        </div>
      </section>

      {/* Botão de Voltar */}
      <div className="flex justify-center pt-4">
        <Link
          href="/"
          className="px-6 py-2 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors duration-200"
        >
          ← Voltar para Análise
        </Link>
      </div>
    </div>
  )
}