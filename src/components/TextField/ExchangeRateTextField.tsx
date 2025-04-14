import React, { useState } from 'react'
import { TextField } from '@mui/material'

import { theme } from '../../assets/theme/theme'

const ExchangeRateTextField = () => {
  const [amount, setAmount] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value
    value = value.replace(',', '.')
    value = value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')
    setAmount(value)
  }

  return (
    <TextField
      placeholder="Enter amount"
      type="text"
      value={amount}
      onChange={handleChange}
      sx={{
        input: {
          backgroundColor: theme.palette.accent.black,
          color: theme.palette.accent.white,
          padding: '10px 14px',
          borderRadius: '8px',
          border: '1px solid transparent',
          backgroundImage: `linear-gradient(${theme.palette.accent.black}, ${theme.palette.accent.black}),
                                linear-gradient(90deg, #FF9F63, #8B3C1F)`,
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            border: 'none',
          },
        },
        borderRadius: '8px',
      }}
    />
  )
}

export default ExchangeRateTextField
