import { Box, Typography } from '@mui/material'
import { FC } from 'react'

import styles from './ExchangeRateCard.module.scss'
import { currencyToCountryCode } from '../../shared/utils/currencyToCountryCode'
interface ExchangeRateCardProps {
  currency: string
  name: string
  rate: number
}

const ExchangeRateCard: FC<ExchangeRateCardProps> = ({ currency, name, rate }) => {
  const flagCode = currencyToCountryCode[currency] || 'un'

  return (
    <Box component="div" className={styles.container}>
      <Box component="div" className={styles.container_aboutCurrency}>
        <img
          src={`https://flagcdn.com/48x36/${flagCode}.png`}
          width={48}
          height={36}
          alt={currency}
        />
        <Box component="div" className={styles.container_aboutCurrency_infoText}>
          <Typography component="b" variant="body1">
            {currency}
          </Typography>
          <Typography component="b" variant="body1">
            {name}
          </Typography>
        </Box>
      </Box>
      <Box component="div" className={styles.container_aboutCurrency}>
        <Typography component="b" variant="caption">
          {rate.toFixed(2)}
        </Typography>
        <img src="/images/grow-up.png" width={25} height={25} alt="currency" />
      </Box>
    </Box>
  )
}

export default ExchangeRateCard
