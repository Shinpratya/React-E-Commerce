import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type authType = {
    token: string;
    loading: boolean;
     error: string | null

    
}
const initialState:authType = {
    token: 'test',
    loading: false,
    error: null
}
const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers:(builder) =>{
        
    },
})

export const { } = authSlice.actions;
export const authSelector = (store: RootState)=> store.authSlice;
export default authSlice.reducer;
