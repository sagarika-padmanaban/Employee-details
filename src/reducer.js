import { createSlice } from "@reduxjs/toolkit";
const initialState={popup:false,post:[],index:null};
const slice = createSlice({
    name:"popup",
    initialState,
    reducers:{
        truepop:(state)=>{
           if(state.popup==true){
            state.popup=false
           }
           else if(state.popup==false){
            state.popup=true
           }
        },
        setpost:(state,action)=>{
           state.post=action.payload
        },
        setindex:(state,action)=>{
            state.index=action.payload
        }

    }
})

export const {truepop,setpost,setindex}=slice.actions;
export default slice.reducer