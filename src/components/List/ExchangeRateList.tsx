import { Box } from '@mui/material'
import { FC } from 'react'

import { TExchangeRates } from '../../redux/types/ExchangeRatesSlice'
import ExchangeRateCard from '../Card/ExchangeRateCard'
import styles from './ExchangeRateList.module.scss'
interface ExchangeRateListProps {
  exchangeRates: TExchangeRates[]
  onBaseCurrencyChange: (currency: string) => void
}

const ExchangeRateList: FC<ExchangeRateListProps> = ({ exchangeRates, onBaseCurrencyChange }) => {
  return (
    <Box component="section" className={styles.container}>
      <Box component="ul" className={styles.container_list}>
        {exchangeRates.map((rateItem) => (
          <Box
            component="li"
            key={rateItem.code}
            onClick={() => onBaseCurrencyChange(rateItem.code)}
            style={{ cursor: 'pointer' }}
          >
            <ExchangeRateCard currency={rateItem.code} name={rateItem.name} rate={rateItem.rate} />
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default ExchangeRateList
