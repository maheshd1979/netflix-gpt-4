import React from 'react';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const Popularmovies = useSelector((store) => store.movies?.PopularMovies);
  //console.log("Popularmovies");
  //console.log(Popularmovies);
  if (!movies) return null;

  const mainMovie = movies[0];
  //console.log(mainMovie);
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative z-20 h-full">
      <VideoBackground movieId={id} />
      <div className="absolute inset-0 flex items-start justify-center pt-20">
        <VideoTitle title={original_title} overview={overview} />
      </div>
    </div>
  );
};

export default MainContainer;
