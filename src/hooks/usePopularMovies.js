import { useDispatch,useSelector } from 'react-redux';
import {addPopularMovies} from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/Constants';
import { useEffect } from 'react'

const usePopularMovies = () =>{
// Fetch Data from TMDB API and Update store  
const dispatch =useDispatch();  
const popularMovies =useSelector(store=>store.movies.PopularMovies);
const getPopularMovies=async()=>{

  const data= await fetch('https://api.themoviedb.org/3/movie/popular?page=1',
   API_OPTIONS
  );
     const json =await data.json();
    // console.log(json.results);
     dispatch(addPopularMovies(json.results));
};

useEffect (()=>{
  !popularMovies && getPopularMovies();
  //getPopularMovies();
},[]);
};
export default usePopularMovies;