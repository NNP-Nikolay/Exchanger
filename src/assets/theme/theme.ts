import { createTheme, Theme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    accent: {
      white: string
      black: string
    }
    gradient: {
      gradient6: string[]
    }
    status: {
      green: string
      red: string
      warning: string
    }
    backgroundCustom: {
      grey: string
    }
  }

  interface PaletteOptions {
    accent?: {
      white: string
      black: string
    }
    gradient?: {
      gradient6: string[]
    }
    status?: {
      green: string
      red: string
      warning: string
    }
    backgroundCustom?: {
      grey: string
    }
  }
}

export const theme: Theme = createTheme({
  palette: {
    accent: {
      white: '#FFFFFF',
      black: '#000000',
    },
    gradient: {
      gradient6: ['#A5AAEE', '#FF9F63'],
    },
    status: {
      green: '#58A55D',
      red: '#E6588B',
      warning: '#FF9F63',
    },
    backgroundCustom: {
      grey: '#141414',
    },
  },
  typography: {
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '150%',
      letterSpacing: '0.15px',
      color: '#FFFFFF',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '143%',
      letterSpacing: '0.17px',
      color: '#FFFFFF',
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: '166%',
      letterSpacing: '0.4px',
      color: '#FFFFFF',
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: '160%',
      letterSpacing: '0.15px',
      color: '#FFFFFF',
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 400,
      lineHeight: '133%',
      color: '#FFFFFF',
    },
    h4: {
      fontSize: '2.125rem',
      fontWeight: 400,
      lineHeight: '124%',
      letterSpacing: '0.25px',
      color: '#FFFFFF',
    },
  },
})
