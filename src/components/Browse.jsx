import React from "react";
import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearchBar from "./GPTSearchBar";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";
import usePopular from "../hooks/usePopular";
import useTopRated from "../hooks/useTopRated";
import useUpcoming from "../hooks/useUpcoming";

const Browse = () => {
useNowPlaying()
usePopular()
useTopRated()
useUpcoming()

  const showGpt = useSelector((state) => state?.gpt?.showGptSearch);
  const {
    nowPlayingMovies,popular,topRated,upcoming
  } = useSelector((state) => state?.movie);

  const isLoading =
    !nowPlayingMovies||!popular|| !topRated || !upcoming

  if (isLoading) return <Shimmer />;

  return (
    <div className="bg-black">
      <Header isLogged={true} isMoviePlayer={false} />
      <main>
        {showGpt ? (
          <GPTSearchBar />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )}
      </main>
    </div>
  );
};

export default Browse;
