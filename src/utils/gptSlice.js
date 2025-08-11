import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
showGptSearch:false,
movieNames:null,
tmdbResults:null
    },
    reducers:{
toggleGPTSearchView:(state,action)=>{
state.showGptSearch=!state.showGptSearch

},
addGPTSearch:(state,action)=>{
    const {movieNames,tmdbResults}=action.payload
    state.movieNames=movieNames
    state.tmdbResults=tmdbResults
}
    }
})
export const {toggleGPTSearchView,addGPTSearch}=gptSlice.actions
export default gptSlice.reducer