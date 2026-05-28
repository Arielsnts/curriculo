import { SiGithub } from "react-icons/si"
import { FaLinkedin } from "react-icons/fa6";

export function Footer() {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 px-4 sm:px-8 md:px-12 py-4 h-auto sm:h-[60px] w-full bg-white">
            <p className="text-xs sm:text-sm font-medium text-gray-500">
                Desenvolvido por Ariel Santos
            </p>

            <nav className="flex gap-4">
                <a
                    href="https://www.linkedin.com/in/ariel-santos-souza-998b8b31a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-800 transition-colors duration-200"
                >
                    <FaLinkedin size={18} />
                </a>
                <a
                    href="https://github.com/Arielsnts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-800 transition-colors duration-200"
                >
                    <SiGithub size={18} />
                </a>
            </nav>
        </div>
    )
}