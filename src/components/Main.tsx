// type Item = string;

// import riaImg from "../img/ria.png"
import { Adv } from "./Adv";
import { News } from "./News";
import { MainProps } from "./DataType"


export const Main: React.FC<MainProps> = ({ news, imageAdv }) => {
    return (
        <div className="content">
            <News items={news}/>
       
            <Adv img={imageAdv}/>
        </div>
    )
}