import { Backend } from "./backend"
import { Frontend } from "./frontend"
import { SkillStyle } from "./style"


export const Skills = ()=>{
    return(
        <SkillStyle className="section" id="skills">
            <h2 className="section__title">Habilidades</h2>
            <span className="section__subtitle">Nível técnico</span>

            <div className="container grid">
                <Frontend />
                <Backend />
            </div>
        </SkillStyle>
    )
}