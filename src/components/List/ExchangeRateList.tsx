import { Box } from '@mui/material'
import { FC } from 'react'

import type { TExchangeRates } from '../../redux/types/ExchangeRatesSlice'
import styles from './ExchangeRateList.module.scss'
import ExchangeRateCard from '../Card/ExchangeRateCard'

interface ExchangeRateListProps {
  exchangeRates: TExchangeRates[]
}

const ExchangeRateList: FC<ExchangeRateListProps> = ({ exchangeRates }) => {
  return (
    <Box component="section" className={styles.container}>
      <Box component="ul" className={styles.container_list}>
        {exchangeRates.map((rateItem) => (
          <Box component="li" key={rateItem.code}>
            <ExchangeRateCard currency={rateItem.code} name={rateItem.name} rate={rateItem.rate} />
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default ExchangeRateList
