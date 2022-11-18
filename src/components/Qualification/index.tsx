import { useState } from "react"
import { QualiStyle } from "./style"

export const Qualification = ()=>{
    const [ toggleState, setToggleState ] = useState(1)

    return(
        <QualiStyle className="section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

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
                                <h3>Web Design</h3>
                                <p>Spain - Institute</p>

                                <div>
                                    <i className='uil uil-calendar-alt ' /> 2022 - Present
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
                                <h3>Art Director</h3>
                                <p>Spain - Institute</p>

                                <div>
                                    <i className='uil uil-calendar-alt ' /> 2022 - Present
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3>Web Design</h3>
                                <p>Spain - Institute</p>

                                <div>
                                    <i className='uil uil-calendar-alt ' /> 2022 - Present
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
                                <h3>Art Director</h3>
                                <p>Spain - Institute</p>

                                <div>
                                    <i className='uil uil-calendar-alt ' /> 2022 - Present
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState == 2 ? "qualification__content-active" : ""}>
                        <div className="qualification__data">
                            <div>
                                <h3>Product Designer</h3>
                                <p>Microsoft - Spain</p>

                                <div>
                                    <i className='uil uil-calendar-alt ' /> 2022 - Present
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
                                <h3>Art Director</h3>
                                <span>Spain - Institute</span>

                                <div>
                                    <i className='uil uil-calendar-alt ' /> 2022 - Present
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3>Web Design</h3>
                                <p>Spain - Institute</p>

                                <div>
                                    <i className='uil uil-calendar-alt ' /> 2022 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </QualiStyle>
    )
}