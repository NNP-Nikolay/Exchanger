import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { TExchangeRates } from './types/ExchangeRatesSlice'

interface ExchangeRatesState {
  exchangeRates: TExchangeRates[]
  baseCurrency: string
}

const initialState: ExchangeRatesState = {
  exchangeRates: [],
  baseCurrency: 'USD',
}

const ExchangeRatesSlice = createSlice({
  name: 'exchange',
  initialState,
  reducers: {
    setExchangeRates(state, action: PayloadAction<TExchangeRates[]>) {
      state.exchangeRates = action.payload
    },
    setBaseCurrency(state, action: PayloadAction<string>) {
      state.baseCurrency = action.payload
    },
  },
})

export const { setExchangeRates, setBaseCurrency } = ExchangeRatesSlice.actions
export default ExchangeRatesSlice.reducer
