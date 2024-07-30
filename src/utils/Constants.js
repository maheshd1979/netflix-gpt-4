export const NETFLIX_LOGO_PATH = `${process.env.PUBLIC_URL}/images/NETFLIX1.png`;
export const USER_ICON_PATH = `${process.env.PUBLIC_URL}/images/usericon.png`;


export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
     // Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDExYzdiMGU5Y2Q4MGQwZjVmYzBlNTUzOGVkYWI1NyIsIm5iZiI6MTcyMTczNjAzNC41OTAzOSwic3ViIjoiNjY5Zjk5MGVlMjk2ZDNhNTI0MTg5N2UzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.PPwqw4WXSwFK6nnWnjjsaE6cu4ZiBiaYMxbgBcFlmpU'
      Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY,

    }
  };

  export const IMG_CDN_URL="https://image.tmdb.org/t/p/w200/"

  export const SUPPORTED_LANGUAGES=[
    {identifier:"en",name:"English"},
    {identifier:"hindi",name:"Hindi"}
  ];

  //export const OPENAI_KEY="sk-None-dh5chfnsOviREJzYNbJRT3BlbkFJR17nO2pKijJk36m71CFP";
  export const OPENAI_KEY=process.env.REACT_APP_OPENAI_KEY;