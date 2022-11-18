import { Content } from "./style"

export const Backend = ()=>{
    return(
        <Content>
            <h3>Backend Developer</h3>

            <div>
                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check' />

                        <div>
                            <h3>Node</h3>
                            <span>Basic</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">

                    <div className="skills__data">
                        <i className='bx bx-badge-check' />

                        <div>
                            <h3>MongoDB</h3>
                            <span>Basic</span>
                        </div>
                    </div>
                </div>
            </div>
        </Content>
    )
}