import axios from 'axios'

type SymbolsResponse = {
  success: boolean
  symbols: Record<string, string>
}

type RatesResponse = {
  success: boolean
  base: string
  date: string
  rates: Record<string, number>
}

type CurrencyData = {
  code: string
  name: string
  rate: number
}

const API_KEY = process.env.REACT_APP_EXCHANGE_RATES_API_KEY

export const fetchCurrencyData = async (): Promise<CurrencyData[]> => {
  try {
    if (!API_KEY) {
      throw new Error('API key is missing')
    }

    const [symbolsResponse, ratesResponse] = await Promise.all([
      axios.get<SymbolsResponse>(`http://data.fixer.io/api/symbols?access_key=${API_KEY}`),
      axios.get<RatesResponse>(`http://data.fixer.io/api/latest?access_key=${API_KEY}`),
    ])

    if (!symbolsResponse.data.success || !ratesResponse.data.success) {
      throw new Error('Failed to load currency data')
    }

    const symbols = symbolsResponse.data.symbols
    const rates = ratesResponse.data.rates

    const merged: CurrencyData[] = Object.entries(symbols)
      .filter(([code]) => rates[code] !== undefined)
      .map(([code, name]) => ({
        code,
        name,
        rate: rates[code],
      }))

    return merged
  } catch (error) {
    console.error('Error fetching currency data:', error)
    throw new Error('Could not load currency data.')
  }
}
