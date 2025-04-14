import { FC } from 'react'
import { Box } from '@mui/material'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Main from '../../components/Main/Main'
import { theme } from '../../assets/theme/theme'

const Home: FC = () => {
  return (
    <Box
      component="div"
      sx={{
        background: theme.palette.accent.black,
        backgroundImage: 'url("/images/background-header.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Header />
      <Main />
      <Footer />
    </Box>
  )
}

export default Home
