import { useState } from "react"
import { HeaderStyle } from "./style"

export const Header = ()=>{
    const [isMenu, setIsMenu] = useState(false)

    return(
        <HeaderStyle>
            <nav className="container">
                <a href="index.html" className="nav__logo">Diogo</a>

                <div className={isMenu ? "nav__menu show-menu":"nav__menu"}>
                    <ul className="grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon" /> Página Inicial
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon" /> Sobre
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file-alt nav__icon" /> Habilidades
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#qualification" className="nav__link">
                                <i className="uil uil-briefcase-alt nav__icon" /> Qualificações
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portifolio" className="nav__link">
                                <i className="uil uil-scenery nav__icon" /> Portfólio
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon" /> Contatos
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" onClick={()=>{setIsMenu(false)}}/>
                </div>

                <div className="nav__toggle" onClick={()=>{setIsMenu(true)}}>
                    <i className="uil uil-apps" />
                </div>
            </nav>
        </HeaderStyle>
    )
}