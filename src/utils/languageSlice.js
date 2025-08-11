import { createSlice } from "@reduxjs/toolkit";

const languageSlice=createSlice({
name:"lang",
initialState:{
    language:"eng"
},
reducers:{
    updateLanguage:(state,action)=>{
        state.language=action.payload
    }
}

})
export const {updateLanguage}=languageSlice.actions
export default languageSlice.reducer