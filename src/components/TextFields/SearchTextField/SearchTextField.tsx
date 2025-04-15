import React, { FC } from 'react'
import { TextField, Box } from '@mui/material'

import { theme } from '../../../assets/theme/theme'

interface SearchTextFieldProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

const SearchTextField: FC<SearchTextFieldProps> = ({
  value,
  onChange,
  placeholder = 'Search currency',
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <Box component="div">
      <TextField
        placeholder={placeholder}
        type="text"
        value={value}
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
    </Box>
  )
}

export default SearchTextField
