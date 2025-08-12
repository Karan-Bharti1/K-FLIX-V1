import React, { useRef, useState } from "react";
import { BG_URL, GPT_SEARCH_URL } from "../utils/url";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import useOnline from "../hooks/useOnlineStatus";
import OnlineStatusUpdate from "./OnlineStatusUpdate";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const status=useOnline()
  
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [errMessage, setErrMessage] = useState(null);

  const dispatch=useDispatch()
  const handleButtonClick = (event) => {
    event.preventDefault();
    setErrMessage(checkValidData(email.current.value, password.current.value));
    if (errMessage) return;
    if (!isSignIn) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const {uid,email,displayName}=auth.currentUser
              dispatch(addUser({
                uid:uid,
                email:email,
                displayName:displayName
              }))
           
            })
            .catch((error) => {
              setErrMessage(error.message);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + " " + errorMessage);
        });
    } else {
      //Sign In lOGIC
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + " " + errorMessage);
        });
    }
  };
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  if(status === false)
   return (
      <>
        <OnlineStatusUpdate />
      </>
    );
  return (
    <>
      <div className="absolute w-full h-screen z-0">
        <img
          className="w-full h-full object-cover bg-center opacity-90"
          src={GPT_SEARCH_URL}
          alt="Background"
        />
      </div>

      <Header />

      <form className="w-11/12 sm:w-8/12 md:w-4/12 lg:w-3/12 p-12 bg-black/80 absolute my-32 mx-auto right-0 left-0 z-10 text-white">
        <div className="font-semibold my-4 text-3xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </div>

        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-3 rounded-lg border-1 w-full"
          />
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-3 rounded-lg border-1 w-full"
          ref={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-3 border-1 rounded-lg w-full"
          ref={password}
        />

        <p className="text-red-500 text-lg py-4 font-semibold">
          {errMessage !== null && errMessage}
        </p>

        <button
          className="p-4 my-4 bg-red-500 text-white w-full rounded-lg cursor-pointer"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn
            ? "New to K-Flix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </>
  );
};

export default Login;
