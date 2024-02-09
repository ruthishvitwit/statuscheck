'use client';
import {
    createAsyncThunk,
    createSlice,
    PayloadAction,
  } from "@reduxjs/toolkit";
  
  
 
  export interface UrlState {
    data: any[];
    loading: boolean;
    error: string | null;
  }
  
  const initialState: UrlState = {
    data: [],
    loading: false,
    error: "",
  };
  export const getUrls = createAsyncThunk(
    "urls",
     async (data:string) => {
      
    return fetch("https://raw.githubusercontent.com/cosmos/chain-registry/master/"+data+"/chain.json").then((res) =>
        res.json()
    );
  });
 
  
  export const UrlSlice = createSlice({
    name: "urls",
    initialState,
    reducers: {
      changeError: (state, action) => {
        state.error = action.payload.message;
      },
      getUrlList: (state) => {
        state.data = [...state.data];
      },
  
     
      // delElement: (state, action: PayloadAction<any>) => {
      //   let index = state.data.findIndex((user) => user.id === action.payload);
      //   state.data.splice(index, 1);
      // },
      // editElement: (state, action: PayloadAction<any>) => {
      //   let index = state.data.findIndex((user) => user.id === action.payload.id);
      //   state.data[index] = action.payload;
      // },
    },
    extraReducers: (builder) => {
      builder
        .addCase(getUrls.pending, (state) => {
          state.loading = true;
        })
        .addCase(getUrls.fulfilled, (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = null;
          state.data=action.payload.apis.rest
        })
        .addCase(getUrls.rejected, (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload;
          state.data = [];
        });
        
    },
  });
  
  // export const {  delElement, editElement } = counterSlice.actions;
  export default UrlSlice.reducer;
  