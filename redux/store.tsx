'use client';
import { configureStore } from '@reduxjs/toolkit'
import urlReducer from "./urlSlice"
import statusReducer from "./statusSlice"

export const store = configureStore({
  reducer: {
    url:urlReducer,
    stats:statusReducer
  }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch