import { Button, Typography } from '@mui/material'
import React from 'react'

import { theme } from '../../assets/theme/theme'
import styles from './GradientButton.module.scss'

interface GradientButtonProps {
  text: string
  onClick: () => void
  maxWidth: string
  maxHeight: string
}

const GradientButton = ({ text, onClick, maxHeight, maxWidth }: GradientButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={styles.confirmButton}
      sx={{
        maxWidth: maxWidth,
        maxHeight: maxHeight,
      }}
    >
      <Typography component="p" variant="body1" sx={{ color: theme.palette.accent.black }}>
        {text}
      </Typography>
    </Button>
  )
}

export default GradientButton
