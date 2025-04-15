import { Box } from '@mui/material'
import { FC } from 'react'

import { TExchangeRates } from '../../redux/types/ExchangeRatesSlice'
import ExchangeRateCard from '../Card/ExchangeRateCard'
import styles from './ExchangeRateList.module.scss'
interface ExchangeRateListProps {
  exchangeRates: TExchangeRates[]
  onBaseCurrencyChange: (currency: string) => void
  searchValue: string
}

const ExchangeRateList: FC<ExchangeRateListProps> = ({
  exchangeRates,
  onBaseCurrencyChange,
  searchValue,
}) => {
  const filteredRates = exchangeRates.filter(
    (rate) =>
      rate.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      rate.code.toLowerCase().includes(searchValue.toLowerCase()),
  )

  return (
    <Box component="section" className={styles.container}>
      <Box component="ul" className={styles.container_list}>
        {filteredRates.map((rateItem) => (
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
