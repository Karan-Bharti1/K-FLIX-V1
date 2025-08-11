import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../utils/userSlice"
import movieSlice from "../utils/movieSlice"
import gptSlice from "../utils/gptSlice"
import languageSlice from "./languageSlice"
const appStore= configureStore({reducer:{
user:userSlice,
movie:movieSlice,
gpt:gptSlice,
lang:languageSlice
}})
export default appStore