import axios from 'axios'

type SymbolsResponse = {
  success: boolean
  symbols: Record<string, string>
}

export const fetchExchangeRates = async (): Promise<SymbolsResponse['symbols']> => {
  const API_KEY = process.env.REACT_APP_EXCHANGE_RATES_API_KEY

  if (!API_KEY) {
    throw new Error('API key is missing! Please check your .env file.')
  }

  try {
    const response = await axios.get<SymbolsResponse>('https://api.apilayer.com/fixer/symbols', {
      headers: {
        apikey: API_KEY,
      },
    })

    if (!response.data.success || !response.data.symbols) {
      throw new Error('Invalid response from API')
    }

    return response.data.symbols
  } catch (error: unknown) {
    console.log('FAILED')
    throw new Error('Could not load currency symbols. Please try again later.')
  }
}
