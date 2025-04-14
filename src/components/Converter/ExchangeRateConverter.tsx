import { Box, Typography } from '@mui/material'
import { FC } from 'react'

import styles from './ExchangeRateConverter.module.scss'
import ExchangeRateTextField from '../TextField/ExchangeRateTextField'
interface ExchangeRateConverterProps {
  baseCurrency: string
  flagCode: string
}

const ExchangeRateConverter: FC<ExchangeRateConverterProps> = ({ baseCurrency, flagCode }) => {
  return (
    <Box component="div" className={styles.container}>
      <Box component="div" className={styles.container_currentRate}>
        <img
          src={`https://flagcdn.com/48x36/${flagCode}.png`}
          width={48}
          height={36}
          alt={`${baseCurrency} flag`}
        />
        <Box component="div" className={styles.container_currentRate_currency}>
          <Typography component="p" variant="body1">
            {baseCurrency}
          </Typography>
          <Typography component="p" variant="body2">
            {baseCurrency === 'USD' ? 'United States Dollar' : baseCurrency}
          </Typography>
        </Box>
      </Box>
      <Box component="div" className={styles.container_amount}>
        <ExchangeRateTextField />
      </Box>
    </Box>
  )
}

export default ExchangeRateConverter
