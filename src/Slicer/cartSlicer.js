import {createSlice} from '@reduxjs/toolkit';

const initialState={
    totalitems:localStorage.getItem("totalitems")
    ? JSON.parse(localStorage.getItem("totalitems"))
    : 0
}

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        settotalitems(state,value){
            state.totalitems=value.payload;
        }
    }
});

export const {settotalitems} = cartSlice.actions;
export default cartSlice.reducer;