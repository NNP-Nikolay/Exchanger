import { Box, Typography } from '@mui/material'
import { FC } from 'react'

import styles from './ExchangeRateConverter.module.scss'
import ExchangeRateTextField from '../TextField/ExchangeRateTextField'

const ExchangeRateConverter: FC = () => {
  return (
    <Box component="div" className={styles.container}>
      <Box component="div" className={styles.container_currentRate}>
        <img src="/images/grow-up.png" width={25} height={25} alt="img" />
        <Box component="div" className={styles.container_currentRate_currency}>
          <Typography component="p" variant="body1">
            USD
          </Typography>
          <Typography component="p" variant="body2">
            United States Dollar
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
