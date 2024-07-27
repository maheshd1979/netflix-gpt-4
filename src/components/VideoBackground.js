import React from 'react';
import useMovieTrailor from '../hooks/useMovieTrailor';


// This componet shows both approaches Redux as well as useState
const VideoBackground = ({ movieId }) => {

 /*  const dispatach =useDispatch();
  const trailerVideo=useSelector(store=>store.movies?.trailerVideo)
  const [trailerId,setTrailerId]=useState(null); */
  const trailerVideo = useMovieTrailor(movieId);

  // Fetching trailer video && updating the store with trailer video data

 /*  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    console.log('my movie');
    console.log(movieId);
    console.log(json.results);
    const filterData = json.results.filter((video) => video.type === 'Trailer');
    const trailer = filterData.length ? filterData[0] : json.results[0];
    setTrailerId(trailer.key);
    dispatach(addTrailerVideo(trailer));
    console.log(trailer);

  };

  useEffect(() => {
    if (movieId) {
      getMovieVideos();
    }
  }, [movieId]); */

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-40">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        //src="https://www.youtube.com/embed/RY5aH21ohU4?si=8w8JxQndvv56cCRs"
        //src={"https://www.youtube.com/embed/"+trailerId}
       // src={"https://www.youtube.com/embed/"+trailerVideo?.key}
       src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
