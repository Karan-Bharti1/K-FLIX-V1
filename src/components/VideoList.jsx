import React from "react";
import MovieCard from "./MovieCard";

const VideoList = ({ title, movies }) => {
  return (
    <div className="py-2 sm:py-4 md:py-6 max-w-[90vw] mx-auto  px-2">
        <div >
      <h1 className=" text-lg sm:text-2xl md:text-3xl  font-semibold text-white  my-3">{title}</h1>

<div className= "flex overflow-x-auto no-scrollbar">
    <div className="flex w-full">
       
   {movies?.map((movie) => (
      <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
    ))}
  
    </div>
    </div>
</div>
   
    </div>
  );
};

export default VideoList;
