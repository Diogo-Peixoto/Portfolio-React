import { InfoStyle } from "./style"

export const Info = ()=>{
    return(
        <InfoStyle className="grid">
            <div className="about__box">
                <i className='bx bx-award'/>
                <h3 >Experience</h3>
                <span >8 Years Working</span>
            </div>

            <div className="about__box">
                <i className='bx bx-briefcase-alt' />
                <h3 >Completed</h3>
                <span >48 + Projects</span>
            </div>

            <div className="about__box">
                <i className='bx bx-support' />
                <h3 >Support</h3>
                <span >Online 24/7</span>
            </div>
        </InfoStyle>
    )
}