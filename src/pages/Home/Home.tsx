import { Box, Typography } from '@mui/material'

import { theme } from '../../assets/theme/theme'
import './Home.scss'

const Home = () => {
  return (
    <Box component="div" sx={{ padding: '16px', background: theme.palette.accent.black }}>
      <Typography component="p" variant="body1">
        <Typography component="p" variant="body1">
          TEXT
        </Typography>
      </Typography>
    </Box>
  )
}

export default Home
