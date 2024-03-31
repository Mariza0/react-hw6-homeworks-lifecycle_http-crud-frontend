export type TypeItem = {

    text: string;
    extraProps?: string;
}

export type TypeItemList = TypeItem[];



export type TypeTitles = {

    text: string;
  
}

export type TypeTitlesList = TypeTitles[];

   
export type MainProps = {
    news: TypeItem[];
    imageAdv: string;
  };