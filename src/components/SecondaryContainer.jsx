import React from "react";
import VideoList from "./VideoList";
import { useSelector } from "react-redux";
import usePopular from "../hooks/usePopular";
import useTopRated from "../hooks/useTopRated";
import useUpcoming from "../hooks/useUpcoming";
import lang from "../utils/languageConstants";

const SecondaryContainer = () => {
  const language=useSelector(state=>state?.lang?.language)
  
  usePopular();
  useTopRated();
  useUpcoming();
  const movies = useSelector((state) => state?.movie?.nowPlayingMovies);
  const popularMovies = useSelector((state) => state?.movie?.popular);
  const topRated = useSelector((state) => state?.movie?.topRated);
  const upcoming= useSelector((state) => state?.movie?.upcoming);
  return (
    <div className="bg-black w-screen mx-auto">
      <div className=" md:-mt-32 lg:-mt-52 z-20 relative">
        {movies && <VideoList title={lang[language].nowPlaying} movies={movies} />}
      </div>
      {movies && <VideoList title={lang[language].topRated} movies={topRated} />}
      {movies && <VideoList title={lang[language].adventure} movies={upcoming} />}
      {movies && <VideoList title={lang[language].upcoming} movies={popularMovies} />}
    </div>
  );
};

export default SecondaryContainer;
