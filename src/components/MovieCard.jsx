import React from 'react';
import { POSTER_URL } from '../utils/url';

const MovieCard = ({ posterPath }) => {
  if(!posterPath) return
  return (
    <div className=" sm:min-w-[180px] sm:max-w-[200px]
    md:min-w-[180px] md:max-w-[200px] min-w-[120px] max-w-[125px] pr-4">
      <img alt="Movie Card" src={POSTER_URL + posterPath} className="rounded-md" />
    </div>
  );
};

export default MovieCard;
