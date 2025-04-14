import { FC } from 'react'
import { Box } from '@mui/material'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { theme } from '../../assets/theme/theme'
import ExchangeRateConverter from '../../components/Converter/ExchangeRateConverter'
import ExchangeRateList from '../../components/List/ExchangeRateList'

const Home: FC = () => {
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
        <ExchangeRateConverter />
        <ExchangeRateList />
      </Box>
      <Footer />
    </Box>
  )
}

export default Home
