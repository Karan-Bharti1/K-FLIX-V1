import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addCurrentMovie } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/url";

const useCurrentMovie = (id) => {
  const dispatch = useDispatch();
  const fetchedTrailer = useSelector(
    (state) => state?.movieSlice?.currentMovie
  );
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}`,
     API_OPTIONS
    );
    const json = await data.json();

    dispatch(addCurrentMovie(json));
  };
  useEffect(() => {
    !fetchedTrailer && getMovieVideo();
  }, []);
};
export default useCurrentMovie;
