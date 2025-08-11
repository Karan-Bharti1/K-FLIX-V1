import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "./url";
import { addTrailerVideo } from "./movieSlice";

const useFetchTrailer=(id)=>{
   const dispatch=useDispatch()
   const fetchedTrailer=useSelector(state=>state?.movieSlice?.trailerVideo)
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const trailer = json?.results?.find(
      (m) => m?.type === "Trailer" || m?.type === "Teaser"
    );
    dispatch(addTrailerVideo(trailer.key))
    
  };
  useEffect(() => {
   !fetchedTrailer &&  getMovieVideo();
  }, []);
}
export default useFetchTrailer