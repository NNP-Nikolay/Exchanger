import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CurrencyState {
  exchangeRates: Record<string, string>
}

const initialState: CurrencyState = {
  exchangeRates: {},
}

const ExchangeRatesSlice = createSlice({
  name: 'exchange',
  initialState,
  reducers: {
    setExchangeRates(state, action: PayloadAction<Record<string, string>>) {
      state.exchangeRates = action.payload
    },
  },
})

export const { setExchangeRates } = ExchangeRatesSlice.actions

export default ExchangeRatesSlice.reducer
