import React, { useState, useEffect } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import useMoviePlayer from "../utils/useMoviePlayer";
import { useSelector } from "react-redux";
import Shimmer from "../components/Shimmer";
import useCurrentMovie from "../hooks/useCurrentMovie";
import { POSTER_URL } from "../utils/url";

const MoviePlayer = () => {
  const { movieId } = useParams();
  useMoviePlayer(movieId);
  useCurrentMovie(movieId);

  const [play, setPlay] = useState(false);

  const currentMovieTeaser = useSelector((state) => state?.movie?.currentTrailer);
  const currentMovie = useSelector((state) => state?.movie?.currentMovie);

  if (!currentMovie || !currentMovieTeaser) return <Shimmer />;

  const {
    title,
    tagline,
    overview,
    genres,
    runtime,
    release_date,
    poster_path,
    vote_average,
  } = currentMovie;

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Header isLogged={true} isMoviePlayer={true} movieId={movieId} />

      {/* Fullscreen popup trailer for ALL screens */}
      {play && (
        <div className="fixed inset-0 bg-black/90 flex justify-center items-center z-50">
          <div className="relative w-[90%] max-w-5xl aspect-video lg:mt-28">
            <iframe
              className="w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${currentMovieTeaser.key}?autoplay=1`}
              title={currentMovieTeaser.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setPlay(false)}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-red-500 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col px-6 md:px-20 py-10 gap-10 mt-12 md:mt-0 sm:mt-0 pt-[35%] md:pt-[15%] lg:pt-[10%]">
        {/* Movie Info */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <img
            src={POSTER_URL + poster_path}
            alt={title}
            className="w-64 rounded-lg shadow-lg"
          />
          <div className="max-w-5xl">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-lg text-red-400 mt-2">{tagline}</p>
            <div className="flex gap-4 mt-3 text-sm text-gray-300">
              <span>{release_date}</span>
              <span>{runtime} min</span>
              <span>⭐ {vote_average.toFixed(1)}</span>
            </div>
            <div className="mt-3 flex gap-2 flex-wrap">
              {genres?.map((g) => (
                <span
                  key={g.id}
                  className="bg-red-500/60 px-2 py-1 rounded-full text-xs"
                >
                  {g.name}
                </span>
              ))}
            </div>
            <p className="mt-5 text-gray-300">{overview}</p>

            {!play && (
              <button
                onClick={() => setPlay(true)}
                className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full font-semibold text-lg flex items-center gap-2 shadow-lg transition-all duration-300 cursor-pointer"
              >
                ▶ Play Trailer
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePlayer;
