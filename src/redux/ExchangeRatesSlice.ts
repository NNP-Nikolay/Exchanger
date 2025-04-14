import { createSlice } from '@reduxjs/toolkit'

interface CurrencyState {
  exchangeRates: []
}

const initialState: CurrencyState = {
  exchangeRates: [],
}

const ExchangeRatesSlice = createSlice({
  name: 'exchange',
  initialState,
  reducers: {
    setExchangeRates(state, action) {
      state.exchangeRates = action.payload
    },
  },
})

export const { setExchangeRates } = ExchangeRatesSlice.actions

export default ExchangeRatesSlice.reducer
