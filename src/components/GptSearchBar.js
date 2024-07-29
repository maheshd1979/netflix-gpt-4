import React from 'react';
import { useSelector } from 'react-redux';
import lang from '../utils/languageConstant';

const GptSearchBar = () => {
  // {lang.hindi.search}
  // placeholder={lang.hindi.GptSearchPlaceholder}   //  "What do you want to search today?" 
  const language = useSelector((store) => store.config.language); // Get the current language
  return (
    <div className="p-4 bg-gray-200 rounded-md shadow-lg">
      <form className="flex items-center space-x-4">
        <input 
          type="search" 
           placeholder={lang[language].GptSearchPlaceholder} 
          className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          type="submit" 
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
         
         {lang[language].search} 
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
