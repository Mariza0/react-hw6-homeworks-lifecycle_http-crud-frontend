type Item = {
    item: string;
    className?: string;
  }

export const Child: React.FC<Item> = ({ item, className}) => {
    return (
        <div>
        {className && <div>{className}</div>}
       
            { item }
        </div>
    )
}
