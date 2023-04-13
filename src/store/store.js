import { configureStore } from '@reduxjs/toolkit'
import  homeSlice  from './slice'

export const store = configureStore({
  reducer: {
    home:homeSlice
  },
})