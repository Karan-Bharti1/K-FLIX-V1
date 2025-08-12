import React from "react";
import { POSTER_URL } from "../utils/url";
import { Link } from "react-router-dom";
const MovieCard = ({ posterPath, movieId }) => {
  if (!posterPath) return;
  return (
    <div
      className=" sm:min-w-[180px] sm:max-w-[200px]
    md:min-w-[180px] md:max-w-[200px] min-w-[120px] max-w-[125px] pr-4 hover:shadow-lg hover:scale-105 transition-transform duration-200"
    >
      <Link className="cursor-pointer" to={`/movie/${movieId}`}>
        <img
          alt="Movie Card"
          src={POSTER_URL + posterPath}
          className="rounded-md"
        />
      </Link>
    </div>
  );
};

export default MovieCard;
