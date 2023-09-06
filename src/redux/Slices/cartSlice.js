import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:'cart',
    initialState: [],
    reducers:{
        add:(state,action)=>{
            state.push(action.payload);
        },
        remove:(state,action)=>{
            console.log("Action payload for remove function in slice is", action.payload)
             return state.filter((item)=> item.id !== action.payload)
            //  console.log("New state is", newState)
        }
    }
})

export const {add,remove} = cartSlice.actions;
export default cartSlice.reducer;