import { useDispatch,useSelector } from "react-redux";
import {  addUpcoming } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/url";

const useUpcoming = () => {
  const dispatch = useDispatch();
    const upcoming=useSelector(state=>state?.movieSlice?.upcoming)
  const playMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addUpcoming(json?.results));
  };
  useEffect(() => {
    !upcoming && playMovies();
  }, []);
};
export default useUpcoming;
