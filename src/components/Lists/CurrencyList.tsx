import { Box } from '@mui/material'
import { FC } from 'react'

import CurrencyCard from '../Cards/CurrencyCard'
import styles from './CurrencyList.module.scss'

const CurrencyList: FC = () => {
  const currencies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

  return (
    <Box component="section" className={styles.container}>
      <Box component="ul" className={styles.container_list}>
        {currencies.map((id) => (
          <Box component="li" key={id}>
            <CurrencyCard />
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default CurrencyList
