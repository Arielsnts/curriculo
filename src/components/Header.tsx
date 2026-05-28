import Link from "next/link";

export function Header() {
  return (
    <div className="flex flex-row justify-between items-center px-4 sm:px-8 md:px-12 py-4 h-auto sm:h-[80px] w-full bg-white">
      <Link href={"/"} className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
        Curriculo
      </Link>

      <nav className="flex gap-4 sm:gap-6 md:gap-8 text-base sm:text-lg md:text-xl font-bold">
        <Link
          className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
          href={"/Sobre"}
        >
          Sobre
        </Link>

        <Link
          className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
          href={"/Contato"}
        >
          Contato
        </Link>
      </nav>
    </div>
  )
}