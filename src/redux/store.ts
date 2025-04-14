import { configureStore } from '@reduxjs/toolkit'

import ExchangeRatesReducer from './ExchangeRatesSlice'

export const store = configureStore({
  reducer: {
    exchange: ExchangeRatesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
