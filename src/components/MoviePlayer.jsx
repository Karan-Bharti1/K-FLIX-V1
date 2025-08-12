import React from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom'

const MoviePlayer = () => {
    const {movieId}=useParams()
    console.log(movieId)
  return (
    <div>
     
    </div>
  )
}

export default MoviePlayer