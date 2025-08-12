import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "./url";
import { addMoviePlayer } from "./movieSlice";

const useMoviePlayer=(id)=>{
   const dispatch=useDispatch()
   const fetchedTrailer=useSelector(state=>state?.movieSlice?.currentTrailer)
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const trailer = json?.results?.find(
      (m) => m?.type === "Trailer" || m?.type === "Teaser"
    );
    dispatch(addMoviePlayer(trailer.key))
    
  };
  useEffect(() => {
   !fetchedTrailer &&  getMovieVideo();
  }, []);
}
export default useMoviePlayer