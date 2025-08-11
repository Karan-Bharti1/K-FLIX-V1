import { useDispatch ,useSelector} from "react-redux"
import { addNowPlayingMovies } from "../utils/movieSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/url"

 const useNowPlaying=()=>{
    const dispatch=useDispatch()
    const nowPlaying=useSelector(state=>state?.movieSlice?.nowPlayingMovies)
 const nowPlayingMovies=async()=>{
  const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
const json=await data.json()

 dispatch(addNowPlayingMovies(json?.results))
 }
 useEffect(()=>{
   if(!nowPlaying){
  nowPlayingMovies()
   }

 
 },[])
 }
 export default useNowPlaying