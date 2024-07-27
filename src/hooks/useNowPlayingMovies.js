import { useDispatch } from 'react-redux';
import {addnowPlayingMovies} from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/Constants';
import { useEffect } from 'react'

const useNowPlayingMovies = () =>{
// Fetch Data from TMDB API and Update store  
const dispatch =useDispatch();  
const getNowPlayingMovies=async()=>{

  const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',
   API_OPTIONS
  );
     const json =await data.json();
    // console.log(json.results);
     dispatch(addnowPlayingMovies(json.results));
};

useEffect (()=>{
  getNowPlayingMovies();
},[]);
};
export default useNowPlayingMovies;