export const NETFLIX_LOGO_PATH = `${process.env.PUBLIC_URL}/images/NETFLIX1.png`;
export const USER_ICON_PATH = `${process.env.PUBLIC_URL}/images/usericon.png`;


export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY,

    }
  };

  export const IMG_CDN_URL="https://image.tmdb.org/t/p/w200/"

  export const SUPPORTED_LANGUAGES=[
    {identifier:"en",name:"English"},
    {identifier:"hindi",name:"Hindi"}
  ];

 
  export const OPENAI_KEY=process.env.REACT_APP_OPENAI_KEY;