import { ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'

import { theme } from '../assets/theme/theme'
import { store } from './store'
import Home from '../pages/Home/Home'

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </Provider>
  )
}
