import { useState } from "react"
import { QualiStyle } from "./style"

export const Qualification = ()=>{
    const [ toggleState, setToggleState ] = useState(2)

    return(
        <QualiStyle className="section" id="qualification">
            <h2 className="section__title">Qualificações</h2>
            <span className="section__subtitle">Minha jornada pessoal</span>

            <div className="container">
                <div className="qualification__tabs">
                    <div onClick={()=> setToggleState(1)} className={toggleState == 1 ? "qualification__active button--flex" : "button--flex"}>
                        <i className='uil uil-graduation-cap ' /> Education
                    </div>

                    <div onClick={()=> setToggleState(2)} className={toggleState == 2 ? "qualification__active button--flex" : "button--flex"}>
                        <i className='uil uil-briefcase-alt ' /> Experience
                    </div>
                </div>

                <div className="qualification__section">
                    <div className={toggleState == 1 ? "qualification__content-active" : ""}>
                        <div className="qualification__data">
                            <div>
                                <h3>FullStack Developer</h3>
                                <p>Kenzie Academy</p>

                                <div>
                                    <i className='uil uil-calendar-alt ' /> 06/22 - Presente
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3>Web Developer</h3>
                                <p>Kenzie Academy</p>

                                <div>
                                    <i className='uil uil-calendar-alt ' /> 06/22 - 11/22
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3>Web FullStack Developer</h3>
                                <p>ProgramadorBR</p>

                                <div>
                                    <i className='uil uil-calendar-alt ' /> 02/21 - 09/21
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        
                    </div>

                    <div className={toggleState == 2 ? "qualification__content-active" : ""}>
                        <div className="qualification__data">
                            <div>
                                <h3>Dev Front-end</h3>
                                <p>UX DOC</p>

                                <div>
                                    <i className='uil uil-calendar-alt ' /> 02/23 - 03/24
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3>Monitor</h3>
                                <p>Kenzie Academy</p>

                                <div>
                                    <i className='uil uil-calendar-alt ' /> 07/22 - 09/22
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </QualiStyle>
    )
}