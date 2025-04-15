import { FC } from 'react'
import { Box, Typography } from '@mui/material'

const Header: FC = () => {
  return (
    <Box
      component="header"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        marginBottom: '50px',
        padding: '32px 32px 0px 32px',
      }}
    >
      <Box component="div">
        <img
          style={{
            borderRadius: '10px',
            border: '1px solid white',
            opacity: '0.6',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
          }}
          src="/logo.jpg"
          width={200}
          height={200}
          alt="logo"
        />
      </Box>

      <Box
        component="div"
        sx={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            opacity: '0.8',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
            textTransform: 'uppercase',
          }}
        >
          Rates may glitch, but we won’t!
        </Typography>
      </Box>
    </Box>
  )
}

export default Header
