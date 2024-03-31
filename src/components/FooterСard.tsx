type Item = {
    title: string;
    img?: string;
    children?: React.ReactNode;
  }

export const FooterCard: React.FC<Item> = ({title, img, children}) => {

  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">{title} 
        <img className="tele-img" src={img} alt=""/></div>
        {children && <div>{children}</div>}
      </div>
    </div>
  );
};
