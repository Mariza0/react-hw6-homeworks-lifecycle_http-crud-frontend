type Item = string;

export function Adv({ img }: { img: Item }) {

    console.log(img)
    return (
       
        <div className="advert-class">
            <img className="img-advert" src={ img } alt="PNG Image" />
            <p>здесь ваша реклама</p>
        </div>
            
       
    )
}
