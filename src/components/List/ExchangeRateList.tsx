import { Box } from '@mui/material'
import { FC } from 'react'

import styles from './ExchangeRateList.module.scss'

interface ExchangeRateListProps {
  exchangeRates: Record<string, string>
}

const ExchangeRateList: FC<ExchangeRateListProps> = ({ exchangeRates }: ExchangeRateListProps) => {
  console.log(exchangeRates)
  return (
    <Box component="section" className={styles.container}>
      <Box component="ul" className={styles.container_list}>
        {/* {exchangeRates.map((id) => (
          <Box component="li" key={id}>
            <CurrencyCard />
          </Box>
        ))} */}
      </Box>
    </Box>
  )
}

export default ExchangeRateList
