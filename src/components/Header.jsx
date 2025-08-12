import React, { useEffect } from "react";
import { LOGO_URL, PROFILE_URL } from "../utils/url";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth"; // ✅ merged into one import
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { toggleGPTSearchView } from "../utils/gptSlice";
import lang, { SUPPORTED_LANGUAGES } from "../utils/languageConstants";
import { updateLanguage } from "../utils/languageSlice";
import { addCurrentMovie, addMoviePlayer } from "../utils/movieSlice";

const Header = ({ isLogged, isMoviePlayer, movieId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGpt = useSelector((state) => state?.gpt?.showGptSearch);
  const language = useSelector((state) => state?.lang?.language);
  const handleSignout = () => {
    const authInstance = getAuth();
    signOut(authInstance)
      .then(() => {
        // navigate("/");
      })
      .catch(() => {
        // navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid, displayName, email }));
        !isMoviePlayer ? navigate("/browse") : navigate(`/movie/${movieId}`);
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const handleGPTSearch = () => {
    dispatch(toggleGPTSearchView());
  };
  const handleLanguageChange = (event) => {
    dispatch(updateLanguage(event.target.value));
  };
  return (
    <div className="absolute md:px-8 py-2 bg-gradient-to-b from-black  z-100 w-screen flex flex-col sm:flex-row md:flex-row md:justify-between ">
      <h1 className="text-red-500 text-5xl  w-48 md:ml-16 lg:ml-16 mx-auto m-4 font-bold shadow-lg  text-center">
        K-Flix
      </h1>
      {isLogged && (
        <div className="text-white flex my-2 justify-center">
          {!isMoviePlayer && (
            <select
              className="rounded-lg bg-red-500/50 my-1 mx-1 p-[5px]  sm:my-2 sm:mx-2  sm:p-4  md:my-4 md:mx-2 py-0 md:p-2  font-semibold cursor-pointer"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES?.map((lan, i) => (
                <option key={i} value={lan?.identifier}>
                  {lan?.name}
                </option>
              ))}
            </select>
          )}
          {!isMoviePlayer && (
            <button
              className="rounded-lg bg-red-500/50 my-1 mx-1 p-[5px]  sm:my-4 sm:mx-2  sm:p-2  md:my-4 md:mx-2 py-0 md:p-2   font-semibold cursor-pointer"
              onClick={handleGPTSearch}
            >
              {!showGpt ? lang[language].gptSearch : lang[language].browse}
            </button>
          )}
      { isMoviePlayer &&   <Link onClick={()=>{dispatch(addCurrentMovie(null))
        dispatch(addMoviePlayer(null))
      }} to="/browse" className="rounded-lg bg-red-500/50 my-1 mx-1 p-[5px]  sm:my-4 sm:mx-2  sm:p-2  md:my-4 md:mx-2 py-0 md:p-2   font-semibold cursor-pointer">Browse</Link>}
          <button
            className="font-medium rounded-lg bg-red-500/50 my-1 mx-1 p-[5px] sm:my-4 sm:mx-2  sm:p-2  md:my-4 md:mx-2 py-0 md:p-2 sm:font-semibold  md:font-semibold cursor-pointer"
            onClick={handleSignout}
          >
            {lang[language].signout}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
