import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

/*  MovieList - Popular
    MovieList - NowPlaying
    MovieList - Trending
    MovieList - Comedy
    MovieList - Horror 
    */

const SecondaryContainer = () => {

  const movies =useSelector((store)=>store.movies);

  return (
    <div className="pl-20.5 bg-black">
    <div className="pl-20 relative z-30 mt-[-10rem]" >
    <MovieList title ={"Now Playing"} movies={movies.nowPlayingMovies}/>
    <MovieList title ={"Trending"} movies={movies.nowPlayingMovies}/>
    <MovieList title ={"Popular"} movies={movies.PopularMovies}/>
    <MovieList title ={"Upcoming Movies"} movies={movies.nowPlayingMovies}/>
    </div>
    </div>
  )
}

export default SecondaryContainer