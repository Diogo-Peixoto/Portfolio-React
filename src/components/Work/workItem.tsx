import { WorkItemStyle } from "./style"

export interface IProps{
    item: {
        id: number;
        image: string;
        title: string;
        category: string;
    }
}

export const WorkItem = ({item}:IProps)=>{
    return(
        <WorkItemStyle>
            <img src={item.image} alt="" />
            <h3>{item.title}</h3>
            <a href="">Demo <i className="bx bx-right-arrow-alt" /></a>
        </WorkItemStyle>
    )
}