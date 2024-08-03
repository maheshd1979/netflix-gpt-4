// hooks/useMovieVideos.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/Constants';
import { addTrailerVideo } from '../utils/moviesSlice';

const useMovieTrailor = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  const getMovieVideos = async () => {
    if (!movieId) return;

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await response.json();

      console.log('my movie');
      console.log(movieId);
      console.log(json.results);

      const filterData = json.results.filter((video) => video.type === 'Trailer');
      const trailer = filterData.length ? filterData[0] : json.results[0];
      dispatch(addTrailerVideo(trailer));
      console.log(trailer);
    } catch (error) {
      console.error('Error fetching movie videos:', error);
    }
  };

  useEffect(() => {
   !trailerVideo && getMovieVideos();
  }, [movieId]);

  return trailerVideo;
};

export default useMovieTrailor;
