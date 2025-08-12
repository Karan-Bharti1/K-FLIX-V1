import React, { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { API_OPTIONS, GPT_API } from "../utils/url";
import { addGPTSearch } from "../utils/gptSlice";
const SearchBar = () => {
  const dispatch = useDispatch();
  const [errMessage, setErrorMessage] = useState("");
  const language = useSelector((state) => state?.lang?.language);
  const text = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const searchMovieInDB = async (movieName) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleGPTSearchClick = async () => {
    const data = await fetch(GPT_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        searchText: text.current.value,
      }),
    });

    const dispatchResults = await data.json();
    console.log(dispatchResults);
    if (!dispatchResults?.movies) {
      setErrorMessage(dispatchResults?.error);
    }
    //For Each movie Search TMDB
    const resolvedData = dispatchResults?.movies?.map((movie) =>
      searchMovieInDB(movie)
    );

    // data is array of promises
    const tmdbResults = await Promise.all(resolvedData);
    console.log(tmdbResults);
    dispatch(
      addGPTSearch({
        movieNames: dispatchResults?.movies,
        tmdbResults: tmdbResults,
      })
    );
  };
  return (
    <div className="relative text-center pt-44 sm:pt-24 md:pt-24  justify-center z-10 ">
      <form className="w-screen  mx-auto" onSubmit={handleSubmit}>
        <input
          ref={text}
          type="text"
          className="ml-2 w-[80%] sm:w-[75%] md:w-[50%] p-2 m-2 md:p-4 sm:p-4 border bg-gray-300 border-gray-400 rounded-lg"
          placeholder={lang[language]?.placeholderText}
        />
        <button
          className=" py-3 px-3 sm:py-4 sm:px-4 md:py-5 md:px-5 bg-red-500/50 text-white rounded-lg cursor-pointer"
          onClick={handleGPTSearchClick}
        >
          <FaSearch />
        </button>
      </form>
      {
        <h1 className="ml-24 text-red-500 my-4 text-3xl font-semibold">
          {errMessage}
        </h1>
      }
    </div>
  );
};

export default SearchBar;
