import { configureStore } from '@reduxjs/toolkit'
import { gameSlice } from './game_slice'

const store = configureStore({
  reducer: {
    game: gameSlice.reducer
  }
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type RootStore = typeof store
