import "./App.css"
import imageAdv from "./img/card.png"
import riaImg from "./img/ria.png"
import rbkImg from "./img/rbc.png"
import gazetaImg from "./img/gazeta.png"

import { Main } from "./components/Main";
import LinkList from "./components/LinkList"
import { TimeDate } from "./components/СurrentDate"
import { FormSearchInput } from "./components/FormSearchInput"
import { Footer } from "./components/Footer"



const TitlesHeader = [
  {text: 'Сейчас в СМИ',
  extraProps: "header-class-main"},
  {text: 'В Германии',
  extraProps: "header-class-second"}, 
  {text: 'Рекомендуем',
  extraProps: "header-class-second"},
  {
    text: TimeDate(),
    extraProps: "header-date"
  }
]

const TitlesServices = 
[
  {text: 'Видео',
  extraProps: "services-class-main"},
  {text: "Картинки",
  extraProps: "services-class-main"},
  {text: 'Новости',
  extraProps: "services-class-main"},
  {text: "Карты",
  extraProps: "services-class-main"}, 
  {text: 'Маркет',
  extraProps: "services-class-main"},
  {text: "Переводчик",
  extraProps: "services-class-main"},
  {text: "ещё",
  extraProps: "services-class-main"},
]

  const news = [

    {text: "Троих иностранцев задержали на Ставрополье за подготовку теракта       ",
    extraProps: riaImg,
    },

    {text: "Зеленский заявил о готовности к переговорам до выхода на границы 1991 года",
    extraProps: rbkImg,
    },

    {text: "84% россиян положительно оценивают работу Путина",
    extraProps: riaImg,
    },
    {text:"Мощная солнечная вспышка X-класса накрыла Северную и Центральную Америки",
    extraProps: gazetaImg,
    },
  
]



const App = () => {

  return (
    <>
      <LinkList items={ TitlesHeader }/>
      <Main news={news} imageAdv={imageAdv}/>
      <FormSearchInput items={ TitlesServices }>
        <Footer/>
      </FormSearchInput>
    </>
  );
};

export default App;
