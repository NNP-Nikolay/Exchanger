import { Box } from '@mui/material'
import { FC } from 'react'

import CurrencyList from '../Lists/CurrencyList'
import CurrencyConverter from '../Converter/CurrencyConverter'

const Main: FC = () => {
  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0px 32px 50px 32px',
      }}
    >
      <CurrencyConverter />
      <CurrencyList />
    </Box>
  )
}

export default Main
