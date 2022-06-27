import { configureStore } from '@reduxjs/toolkit'
import playerReducer from 'app/player'

export const store = configureStore({
  reducer: {
    player: playerReducer
  },
})