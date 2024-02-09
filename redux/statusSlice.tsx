'use client';
import {
    createAsyncThunk,
    createSlice,
    PayloadAction,
  } from "@reduxjs/toolkit";
  
  export interface StatusState {
    data: Record<string, boolean>;
    loading: boolean;
    error: string | null;
  }
  
  const initialState: StatusState = {
    data: {},
    loading: false,
    error: "",
  };
  export const getStatus = createAsyncThunk(
    "status",
     async (data:string) => {
    // let response: any = []
    // data.forEach(url => {
    //   fetch(url).then(res => {
    //     response = [...response,  res.status]
    //   })
      // .catch(err => {
      //   response = [...response, {url: url, status: err.status}]
      // })
    // })
    // return response
    return fetch(data+"/cosmos/gov/v1beta1/proposals").then(res =>{res})
  });

  export const StatusSlice = createSlice({
    name: "stats",
    initialState,
    reducers: {
      changeError: (state, action) => {
        state.error = action.payload.message;
      },
      // getStatusList: (state) => {
      //   state.data = [...state.data];
      // },
  
     
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
        .addCase(getStatus.pending, (state) => {
            state.loading = true;
          })
          .addCase(getStatus.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            const url = action.meta.arg
            state.data[url] = true
          })
          .addCase(getStatus.rejected, (state, action) => {
            const url = action.meta.arg
            state.data[url] = false
            state.loading = false;
            // state.error = action.payload;
            // state.data=false;
          });
        
    },
  });
  // export const {  getStatusList } = StatusSlice.actions;
  export default StatusSlice.reducer;