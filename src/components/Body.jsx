import React, { useEffect } from 'react'
import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import MoviePlayer from './MoviePlayer'

const Body = () => {
  
    const router=createBrowserRouter([{
  path:"/",
  element:<Login/>,
},{
    path:"/browse",
    element:<Browse/>
},{
  path:"/movie:movieId",
  element:<MoviePlayer/>
}])


  return (
    <div>
       <RouterProvider router={router}/>
    </div>
  )
}

export default Body