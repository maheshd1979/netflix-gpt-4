import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  //console.log("Movie List");
  //console.log(movies);

  return (
    <div className="p-4">
    <h1 className="text-2xl font-bold mb-4 text-white">{title}</h1>
      <div className="flex overflow-x-auto space-x-4">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
