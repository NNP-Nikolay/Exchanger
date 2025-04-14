import { FC } from 'react'
import { Box } from '@mui/material'

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
      <Box>
        <img src="/logo.png" width={200} height={200} alt="logo" />
      </Box>
    </Box>
  )
}

export default Header
