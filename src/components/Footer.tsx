import { FooterCard } from "./FooterСard"
import imgWeather from "../img/weather.png"
import imgEfir from "../img/efir.png"
import imgPlay from "../img/play.png"


export const Footer = () => {

    return (

<div className="footer-class">

      <FooterCard title={'Погода'}>
        <div className="card-content">
          <img className="weather-img" src={imgWeather} alt="weather" style={{ marginRight: '7px'}}/>
          <span style={{ fontWeight: 'bold', fontSize: '23px', marginRight: '7px'}}> +17°</span>
          <span style={{ marginRight: '7px'}}> Утром +17,<br />днем +20</span>
   
        </div>

        </FooterCard>

        <FooterCard title={'Посещаемое'}>
        <div className="card-content">
        <span style={{ fontWeight: 'bold' }}> Недвижимость</span> - о сталинках
        </div>
        
        <div className="card-content">
        <span style={{ fontWeight: 'bold' }}> Маркет</span> - люстры и светильники
        </div>

        <div className="card-content">
        <span style={{ fontWeight: 'bold' }}> Авто.ру</span> - привод 4х4 до 500 000
        </div>

        </FooterCard>

        <FooterCard title={'Карта Германии'}>

        <div className="card-content">
        <span>Расписания</span>
        </div>
        </FooterCard>

        <FooterCard title={'Телепрограмма'} img={imgEfir}>
        <div className="card-content">
        <span style={{ marginRight: '7px'}}>02:00 ТНТ.Best </span>
        <span style={{ opacity: '0.5'}}>TNT International</span>
        </div>

        <div className="card-content">
           <span style={{ marginRight: '7px'}}>02:15 Джинглики </span>
        <span style={{ opacity: '0.5'}}>Карусель ITN</span>
        </div>

        <div className="card-content">
           <span style={{ marginRight: '7px'}}>02:25 Наедине со всеми </span>
            <span style={{ opacity: '0.5'}}>Первый</span>
        </div>
       
        </FooterCard>

        <FooterCard title="Эфир">

        <div className="card-content">
           <img className="img-play" src={imgPlay} alt=""/>
           <span style={{ marginRight: '7px'}}>Управление как искусство </span>
           <span style={{ opacity: '0.5'}}>Успех</span>
        </div>

        <div className="card-content">
           <img className="img-play" src={imgPlay} alt=""/>
           <span style={{ marginRight: '7px'}}>Ночь. Мир в это время </span>
           <span style={{ opacity: '0.5'}}>Earth TV</span>
        </div>

        <div className="card-content">
           <img className="img-play" src={imgPlay} alt=""/>
           <span style={{ marginRight: '7px'}}>Андрей Возн.. </span>
           <span style={{ opacity: '0.5'}}>Совершенно секретно</span>
        </div>


        </FooterCard>

      </div>

)

}