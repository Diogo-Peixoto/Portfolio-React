import { Content } from "./style"

export const Frontend = ()=>{
    return(
        <Content>
            <h3>Front-end</h3>

            <div className="skils__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check' />

                        <div>
                            <h3>React</h3>
                            <span>Pleno</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check' />

                        <div>
                            <h3>TypeScript</h3>
                            <span>Pleno</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check' />

                        <div>
                            <h3>JavaScript</h3>
                            <span>Pleno</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">

                    <div className="skills__data">
                        <i className='bx bx-badge-check' />

                        <div>
                            <h3>Next</h3>
                            <span>Pleno</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check' />

                        <div>
                            <h3>Tailwind</h3>
                            <span>Pleno</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check' />

                        <div>
                            <h3>Git</h3>
                            <span>Pleno</span>
                        </div>
                    </div>
                </div>
            </div>
        </Content>
    )
}