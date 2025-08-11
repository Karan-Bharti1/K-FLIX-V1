import React from 'react';
import { useSelector } from 'react-redux';
import VideoList from './VideoList';

const SearchSuggestions = () => {
  const results = useSelector(state => state?.gpt?.movieNames);
  const movieDetails = useSelector(state => state?.gpt?.tmdbResults);

  if (!movieDetails || !results?.length) return null;
  return (
    <div className="absolute ml-4 mx-auto  md:ml-8 lg:ml-16 pt-4  sm:pt-6  md:pt-12  ">
      <div className="text-white bg-black/40 text-2xl ">
<div className="text-white bg-black/50   overflow-x-hidden">

{results?.map((movie,index)=>(<VideoList key={movie} title={movie} movies={movieDetails[index]}/>))}

  </div></div>
</div>

    
  );
};

export default SearchSuggestions;
