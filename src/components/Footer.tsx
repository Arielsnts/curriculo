import { SiGithub } from "react-icons/si"
import { FaLinkedin } from "react-icons/fa6";

export function Footer() {
    return (
        <div className="flex flex-row justify-between px-15 py-6 h-[60px] w-full">
            <p className="text-sm font-bold">Desenvolvido por Ariel Santos</p>

            <nav className="flex gap-4">
                <a
                    href="https://www.linkedin.com/in/ariel-santos-souza-998b8b31a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                >
                    <FaLinkedin size={20} />
                </a>
                <a
                    href="https://github.com/Arielsnts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                >
                    <SiGithub size={20} />
                </a>
            </nav>
        </div>
    )
}