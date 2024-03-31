import { TypeItem } from "./DataType";
 

export const News = ({items}:{items:TypeItem[]}) => {

  return (
    
    <div className="item-list">
            {items.map((item: TypeItem) => (

                <div className="item" key={item.text} >

                  <img className="img-news" src={item.extraProps} alt=""/>
                  <div className="text-news">
                    {item.text}
                  </div>
                
              </div>

            ))}
            </div>
  );
};