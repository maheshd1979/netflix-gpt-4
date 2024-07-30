import React from 'react';
import { IMG_CDN_URL } from '../utils/Constants';

const MovieCard = ({ posterPath }) => {
  if(!posterPath) return null;
  return (
    <div className="flex-shrink-0 w-40 h-60">
      <img
        alt="Movie Card"
        src={`${IMG_CDN_URL}${posterPath}`}
        className="w-full h-full object-cover rounded-md shadow-md"
      />
    </div>
  );
};

export default MovieCard;
