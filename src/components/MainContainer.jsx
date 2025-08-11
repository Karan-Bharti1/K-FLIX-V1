import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
    const movies=useSelector(state=>state?.movie?.nowPlayingMovies)
    if(!movies) return
    const mainMovie=movies[0]
    
  return (
    <div>
        <VideoTitle mainMovie={mainMovie}/>
        <VideoBackground mainMovie={mainMovie}/>    
        </div>
  )
}

export default MainContainer