import Link from "next/link";

export function Header() {
  return (
    <div className="flex flex-row justify-between items-center px-4 sm:px-8 md:px-12 py-4 h-auto sm:h-[80px] w-full bg-white">
      <Link href={"/"} className="text-xl sm:text-2xl font-bold text-[#1f2937]">
        Curriculo
      </Link>

      <nav className="flex gap-4 sm:gap-6 md:gap-8 text-base sm:text-lg md:text-xl font-bold">
        <Link
          className="text-[#1f2937] hover:text-gray-600 transition-colors duration-200"
          href={"/Sobre"}
        >
          Sobre
        </Link>

        <Link
          className="text-[#1f2937] hover:text-gray-600 transition-colors duration-200"
          href={"/Contato"}
        >
          Contato
        </Link>
      </nav>
    </div>
  )
}