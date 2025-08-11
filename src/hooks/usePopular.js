import { useDispatch,useSelector } from "react-redux"
import { addPopular } from "../utils/movieSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/url"

 const usePopular=()=>{
    const dispatch=useDispatch()
      const popular=useSelector(state=>state?.movieSlice?.popular)
 const playMovies=async()=>{
  const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
const json=await data.json()

 dispatch(addPopular(json.results))
 }
 useEffect(()=>{
 !popular && playMovies()
 
 },[])
 }
 export default usePopular