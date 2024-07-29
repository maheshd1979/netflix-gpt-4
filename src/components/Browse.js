import React from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
 const ShowGptSearch=useSelector(store=>store.gpt.visible)

  return (
    <>
      <Header />
      {ShowGptSearch?(
        <div className="relative h-screen pt-24"> 
        <GptSearch/>
        </div>
      ):
      (
        <>
        <div className="relative h-screen">
        <MainContainer />
        <SecondaryContainer />
      </div>
        </>
      )}
      
    </>
  );
};

export default Browse;
