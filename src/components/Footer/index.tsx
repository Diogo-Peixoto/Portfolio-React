import { FooterStyle } from "./style"

export const  Footer = ()=>{
    return(
        <FooterStyle>
            <div className="container">
                <h2>Diogo Peixoto</h2>

                <ul>
                    <li>
                        <a href="#about">Sobre</a>
                    </li>

                    <li>
                        <a href="#portfolio">Portfólio</a>
                    </li>

                    <li>
                        <a href="#skills">Habilidades</a>
                    </li>
                </ul>

                <div>
                    <a href="https://www.linkedin.com/in/diogo-soares-peixoto/" target="_blank"><i className="uil uil-linkedin-alt" /></a>

                    <a href="https://github.com/Diogo-Peixoto" target="_blank"><i className="uil uil-github-alt"></i></a>

                    <a href="https://web.whatsapp.com/send/?phone=5538999977397" target="_blank"><i className="uil uil-whatsapp"></i></a>
                </div>

                <span>@Diogo-Peixoto</span>
            </div>
        </FooterStyle>
    )
}