import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#7e57c2',
    },
    secondary: {
      main: '#ffab91',
    },
  },
  status: {
    danger: 'orange',
  },
  typography: {
    fontFamily: 'Roboto',
  },
})
