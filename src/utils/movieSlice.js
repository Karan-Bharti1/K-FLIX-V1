import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
name:"movie",
initialState:{
    nowPlayingMovies:null,
    trailerVideo:null,
    popular:null,
    topRated:null,
    upcoming:null
},
reducers:{
    addNowPlayingMovies:(state,actions)=>{
        state.nowPlayingMovies=actions.payload
    },
    addTrailerVideo:(state,action)=>{
        state.trailerVideo=action.payload
    },
    addPopular:(state,action)=>{
        state.popular=action.payload
    
    },
    addTopRated:(state,action)=>{
        state.topRated=action.payload
    },
    addUpcoming:(state,action)=>{
        state.upcoming=action.payload
    }
}
})
export const {addNowPlayingMovies,addTrailerVideo,addPopular,addTopRated,addUpcoming}=movieSlice.actions
export default movieSlice.reducer