import { FC, useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { theme } from '../../assets/theme/theme'
import ExchangeRateConverter from '../../components/Converter/ExchangeRateConverter'
import ExchangeRateList from '../../components/List/ExchangeRateList'
import { fetchCurrencyData } from '../../shared/api/exchangeRatesApi'
import { RootState } from '../../redux/store'
import { setExchangeRates } from '../../redux/ExchangeRatesSlice'
import Loader from '../../components/Loader/Loader'
import { currencyToCountryCode } from '../../shared/utils/currencyToCountryCode'

const Home: FC = () => {
  const dispatch = useDispatch()
  const { exchangeRates, baseCurrency } = useSelector((state: RootState) => state.exchange)
  const [loading, setLoading] = useState<boolean>(true)

  const flagCode = currencyToCountryCode['USD'] || 'un'

  useEffect(() => {
    const getExchangeRates = async () => {
      try {
        const data = await fetchCurrencyData()
        dispatch(setExchangeRates(data))
      } catch {
        console.log('Request finished with problem')
      } finally {
        setLoading(false)
      }
    }
    getExchangeRates()
  }, [dispatch])

  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        background: theme.palette.accent.black,
        backgroundImage: 'url("/images/background-header.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          margin: '0px 32px 50px 32px',
        }}
      >
        <ExchangeRateConverter baseCurrency={baseCurrency} flagCode={flagCode} />
        {loading ? <Loader /> : <ExchangeRateList exchangeRates={exchangeRates} />}
      </Box>
      <Footer />
    </Box>
  )
}

export default Home
