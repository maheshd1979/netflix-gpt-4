import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';

const GptSearch = () => {
  return (
    <div className="relative p-4 z-10 h-screen flex items-center justify-center">
      <img
        className="absolute top-0 left-0 object-cover w-full h-full"
        src={`${process.env.PUBLIC_URL}/images/Background.png`}
        alt="Background"
      />
      <div className="relative z-20 p-4 space-y-4 w-3/4">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
}

export default GptSearch;
