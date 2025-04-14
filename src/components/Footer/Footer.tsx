import { Box, Typography } from '@mui/material'
import { FC } from 'react'

const Footer: FC = () => {
  return (
    <Box component="footer">
      <Typography
        component="p"
        variant="body2"
        sx={{
          textAlign: 'center',
          opacity: '0.6',
          padding: '0px 32px 32px 32px',
        }}
      >
        © 2025 ExchangerOcty. All rights reserved
      </Typography>
    </Box>
  )
}

export default Footer
