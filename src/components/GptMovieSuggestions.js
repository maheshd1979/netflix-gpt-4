import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector(store => store.gpt);
  if (!movieNames) return null;
  return (
    <div className="p-4 bg-gray-200 rounded-md shadow-lg overflow-auto max-h-[60vh]">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={index}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
}

export default GptMovieSuggestions;
