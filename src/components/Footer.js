import React from 'react'
// styles
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  FooterContainer: {
    backgroundColor: theme.palette.primary.main,
    position: 'absolute',
    bottom: '0px',
    justifyContent: 'center',
  },
  FooterText: {
    color: 'white',
    fontSize: '1.6rem',
  },
}))

export const Footer = (props) => {
  const classes = useStyles(props)

  return (
    <Grid container xs={12} className={classes.FooterContainer}>
      <Typography className={classes.FooterText}>
        Created by Shawn DelPercio.
      </Typography>
    </Grid>
  )
}
