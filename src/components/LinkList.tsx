
import { TypeItemList } from './DataType';
import { TimeDate } from './СurrentDate';
  

export const LinkList = ({ items }: {items: TypeItemList}) => {
  return (
    <ul className="link-list" style={{ listStyleType: 'none' }}>
      {items.map((item) => (
        <li key={item.text}>
            {item.text === TimeDate() ? <div className={item.extraProps ? item.extraProps : ''}>{ item.text }</div> :
            <a className={item.extraProps ? item.extraProps : ''} href="#">{item.text}</a>}
        </li>
      ))}
    </ul>
  );
};

export default LinkList;
