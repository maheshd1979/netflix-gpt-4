import React, { useRef } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import lang from '../utils/languageConstant';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/Constants';
import { addGptMoviesResult } from '../utils/gptSlice';

const GptSearchBar = () => {

  const searchText=useRef(null);
  const dispatch = useDispatch();

  // movie search from TMDB database
  const searchMovie=async(movie)=>{
   // console.log("mo" +movie);
      const data= await fetch('https://api.themoviedb.org/3/search/movie?query='+
      movie+
      '&include_adult=false&language=en-US&page=1',
       API_OPTIONS
      );

      const json= await data.json();
      return json.results;

  };
  const handleGptSearchClick=async ()=>{
    console.log(searchText.current.value)

    const gptQuery= "Act as a Movie Recommendation system and suggest some movies for the query : "
                    +  searchText.current.value +
                    ". only give me names of first three movies comma separted mannar with out numbers liks A,B ,C ";
    // Make an Open Gpt API call and get movie results
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    //console.log(gptResults.choices?.[0]?.message?.content);
    const gptMovies=gptResults.choices?.[0]?.message?.content.split(",");
    console.log("TEST");
    console.log(gptMovies);
    const promiseArray = gptMovies.map(movie => searchMovie(movie));
    const movieResult = await Promise.all(promiseArray);
    console.log(movieResult);
    dispatch(addGptMoviesResult({movieNames:gptMovies,movieResults:movieResult}));
    
  };
  
  // {lang.hindi.search}
  // placeholder={lang.hindi.GptSearchPlaceholder}   //  "What do you want to search today?" 
  const language = useSelector((store) => store.config.language); // Get the current language
  return (
    <div className="p-4 bg-gray-200 rounded-md shadow-lg">
      <form className="flex items-center space-x-4" onSubmit={(e)=>e.preventDefault()} >
        <input 
          ref={searchText}
          type="search" 
           placeholder={lang[language].GptSearchPlaceholder} 
          className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          
          className="px-4 py-2 bg-blue-600 text-white rounded-md 
          hover:bg-blue-700 transition-colors duration-300"
          onClick={handleGptSearchClick}
        >
        {lang[language].search} 
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
