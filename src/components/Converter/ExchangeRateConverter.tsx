import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './ExchangeRateConverter.module.scss'
import { RootState } from '../../redux/store'
import { setAmount, setUpdateRates } from '../../redux/ExchangeRatesSlice'
import { currencyFullName } from '../../shared/utils/currencyFullName'
import AmountTextField from '../TextFields/AmountTextField/AmountTextField'
import SearchTextField from '../TextFields/SearchTextField/SearchTextField'

interface ExchangeRateConverterProps {
  baseCurrency: string
  flagCode: string
  searchValue: string
  setSearchValue: (value: string) => void
}

const ExchangeRateConverter: FC<ExchangeRateConverterProps> = ({
  flagCode,
  baseCurrency,
  searchValue,
  setSearchValue,
}) => {
  const dispatch = useDispatch()
  const { amount } = useSelector((state: RootState) => state.exchange)

  const handleAmountChange = (value: string) => {
    dispatch(setAmount(value))
  }

  const handleUpdateRates = () => {
    dispatch(setUpdateRates())
  }

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
            {currencyFullName[baseCurrency] || baseCurrency}
          </Typography>
        </Box>
      </Box>
      <Box component="div" className={styles.container_amount}>
        <SearchTextField value={searchValue} onChange={setSearchValue} placeholder="Search..." />
        <AmountTextField
          amount={amount}
          onAmountChange={handleAmountChange}
          onUpdateRates={handleUpdateRates}
        />
      </Box>
    </Box>
  )
}

export default ExchangeRateConverter
