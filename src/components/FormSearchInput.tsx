import yaImg from "../img/ya.png"
import { TypeItem } from "./DataType";
import LinkList from "./LinkList";
import fors from "../img/forsazh.png"

type Item = {
    items: TypeItem[];
    children?: React.ReactNode;
  }

// export const FormSearchInput: React.FC<Item> = ({title, img, children})

export const FormSearchInput: React.FC<Item> = ({items, children}) => {

    return (
      <>
      <div className="content-main-search">

      <LinkList items={ items }/> 

        <div className="content-search-ya">

       
        <form className="form-search">
            <div className="content-search">
                <div className="new">
                <img className="img-ya" src={yaImg} alt=""/>
                
                <input id="input-id" type="text" className="input-search"></input>
               
                <button className="btn-search">Найти</button>

            </div>
                
            <div className="label-input">Найдется всё. Например,
        <span style={{ opacity: 0.5 }}> фаза луны сегодня</span>

        <img className="class-img-adv" src={fors}/>

        <div>{children}</div>

        </div>
                
            </div>
        </form>
        </div>

        {/* <img className="class-img-adv" src={fors}/> */}
        </div>
        </>
    );
  };