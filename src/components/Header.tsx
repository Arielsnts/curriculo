import Link from "next/link";

export function Header() {
  return (
    <div className="flex flex-row justify-between px-15 py-6 h-[90px] w-full">
      <Link href={"/"} className="text-2xl font-bold" >Curriculo</Link>

      <nav className="flex gap-8 text-xl font-bold">
        <Link
          className="link"
          href={"/Sobre"}
        >
          Sobre
        </Link>
        
        <Link
          className="link"
          href={"/Contato"}
        >
          Contato
        </Link>
      </nav>
    </div>
  )
}