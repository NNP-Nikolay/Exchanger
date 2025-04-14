import React, { FC } from 'react'
import { TextField, Button, Box, Typography } from '@mui/material'

import { theme } from '../../assets/theme/theme'
import styles from './ExchangeRateTextField.module.scss'

interface ExchangeRateTextFieldProps {
  amount: string
  onAmountChange: (value: string) => void
  onUpdateRates: () => void
}

const ExchangeRateTextField: FC<ExchangeRateTextFieldProps> = ({
  amount,
  onAmountChange,
  onUpdateRates,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value
    value = value.replace(',', '.')
    value = value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')
    onAmountChange(value)
  }

  const handleButtonClick = () => {
    const numericValue = parseFloat(amount)
    if (amount === '' || isNaN(numericValue)) {
      return
    }
    onUpdateRates()
  }

  return (
    <Box component="div" className={styles.container}>
      <TextField
        placeholder="100"
        type="text"
        value={amount === '' ? '' : amount || '100'}
        onChange={handleChange}
        autoComplete="off"
        sx={{
          input: {
            backgroundColor: theme.palette.accent.black,
            color: theme.palette.accent.white,
            padding: '10px 14px',
            maxHeight: '45px',
            borderRadius: '8px',
            border: '1px solid transparent',
            backgroundImage: `linear-gradient(${theme.palette.accent.black}, ${theme.palette.accent.black}),
                          linear-gradient(90deg, #FF9F63, #8B3C1F)`,
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box',
            transition: 'background-color 0.3s ease, border-color 0.3s ease',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              border: 'none',
            },
          },
          borderRadius: '8px',
        }}
      />

      <Button
        onClick={handleButtonClick}
        className={styles.container_confirmButton}
        sx={{
          maxWidth: '120px',
          maxHeight: '43px',
        }}
      >
        <Typography component="p" variant="body1" sx={{ color: theme.palette.accent.black }}>
          Confirm
        </Typography>
      </Button>
    </Box>
  )
}

export default ExchangeRateTextField
