import { FC } from 'react'
import { Box } from '@mui/material'

import styles from './Header.module.scss'

const Header: FC = () => {
  return (
    <Box component="header" className={styles.header}>
      <Box component="div" className={styles.header_logoContainer}>
        <img
          style={{ borderRadius: '12px' }}
          className={styles.logo}
          src="/logo.jpg"
          width={200}
          height={200}
          alt="logo"
        />
      </Box>
    </Box>
  )
}

export default Header
