import { createTheme } from '@mui/material'

export const theme = {
  colors: {
    white: '#FFFFFF',
    lightGrey: '#F7F8FA',
    grey: '#C0C7D6',
    darkGrey: '#737C8E',
    black: '#111111',
    success: '#8FCB81',
    error: '#CB8581',
    warning: '#E1D888',
    background: '#C4DDFF'
  }
}

export const muiTheme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {}
    }
  }
})
