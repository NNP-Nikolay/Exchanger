import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TExchangeRate {
  code: string
  name: string
  rate: number
}

interface ExchangeRatesState {
  amount: string
  baseCurrency: string
  exchangeRates: TExchangeRate[]
}

const initialState: ExchangeRatesState = {
  amount: '',
  baseCurrency: 'USD',
  exchangeRates: [],
}

const exchangeRatesSlice = createSlice({
  name: 'exchangeRates',
  initialState,
  reducers: {
    setAmount: (state, action: PayloadAction<string>) => {
      state.amount = action.payload
    },
    setBaseCurrency: (state, action: PayloadAction<string>) => {
      state.baseCurrency = action.payload
    },
    setExchangeRates: (state, action: PayloadAction<TExchangeRate[]>) => {
      state.exchangeRates = action.payload
    },
    setUpdateRates: (state) => {
      const baseRate =
        state.exchangeRates.find((rate) => rate.code === state.baseCurrency)?.rate || 1
      state.exchangeRates = state.exchangeRates.map((rate) => ({
        ...rate,
        rate: parseFloat(state.amount) * (rate.rate / baseRate),
      }))
    },
  },
})

export const { setAmount, setBaseCurrency, setExchangeRates, setUpdateRates } =
  exchangeRatesSlice.actions
export default exchangeRatesSlice.reducer
