import React from 'react'
import { FaPlay } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
const VideoTitle = ({mainMovie}) => {
  const {original_title,
overview
}=mainMovie
  return (
    <div className='absolute md:pt-0 lg:pt-0 pt-[72%]  w-screen aspect-video bg-gradient-to-r from-black '>
      <div className='pt-[14%] px-6 md:px-12 lg:px-24  text-white  '>
<h1 className='text-lg md:text-2xl lg:text-5xl font-bold'>{original_title}</h1>
<p className='hidden lg-block md:block md:w-3/4 lg:font-light  lg:text-lg  lg:py-6 lg:w-1/2'>{overview}</p>
</div>
<div className='flex py-2 md:px-12 lg:px-24  px-6'>
  <button className='lg:text-lg lg:p-3 md:p-2 p-1 rounded-lg lg:px-4 bg-gray-200 font-bold mr-3 hover:opacity-80 cursor-pointer'><FaPlay/></button>
   <button className='lg:text-lg lg:p-3 md:p-2 p-1 lg:px-4 rounded-lg bg-gray-200 font-bold ml-3 hover:opacity-80 cursor-pointer'><FaInfo/> </button>
</div>
    </div>
  )
}

export default VideoTitle