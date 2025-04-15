import React, { FC } from 'react'
import { TextField, Box } from '@mui/material'

import { theme } from '../../../assets/theme/theme'
import styles from './AmountTextField.module.scss'
import GradientButton from '../../Button/GradientButton'

interface AmountTextFieldProps {
  amount: string
  onAmountChange: (value: string) => void
  onUpdateRates: () => void
}

const AmountTextField: FC<AmountTextFieldProps> = ({ amount, onAmountChange, onUpdateRates }) => {
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
      <GradientButton
        onClick={handleButtonClick}
        text={'Confirm'}
        maxHeight={'43'}
        maxWidth={'120'}
      />
    </Box>
  )
}

export default AmountTextField
