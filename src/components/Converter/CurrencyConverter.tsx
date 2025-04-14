import { Box, Typography } from '@mui/material'
import { FC } from 'react'

import RateTextField from '../TextField/RateTextField'
import styles from './CurrencyConverter.module.scss'

const CurrencyConverter: FC = () => {
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
        <RateTextField />
      </Box>
    </Box>
  )
}

export default CurrencyConverter
