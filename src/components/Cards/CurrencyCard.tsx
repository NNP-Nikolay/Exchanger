import { Box, Typography } from '@mui/material'
import { FC } from 'react'

import styles from './CurrencyCard.module.scss'

const CurrencyCard: FC = () => {
  return (
    <Box component="div" className={styles.container}>
      <Box component="div" className={styles.container_aboutCurrency}>
        <img src="/logo.png" width={50} height={50} alt="currency" />
        <Box component="div" className={styles.container_aboutCurrency_infoText}>
          <Typography component="b" variant="body1">
            USD
          </Typography>
          <Typography component="b" variant="body1">
            United States Dollar
          </Typography>
        </Box>
      </Box>
      <Box component="div" className={styles.container_aboutCurrency}>
        <Typography component="b" variant="caption">
          13,134
        </Typography>
        <img src="/images/grow-up.png" width={25} height={25} alt="currency" />
      </Box>
    </Box>
  )
}

export default CurrencyCard
