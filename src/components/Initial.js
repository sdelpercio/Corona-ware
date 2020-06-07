import React from 'react'
import { Link } from 'react-router-dom'
// styles
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Paper, Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '30vh',
    margin: '10% 0',
  },
  ButtonContainer: {
    height: '100%',
    margin: '5% 0',
    padding: '2% 2%',
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  Buttons: {
    fontSize: '2rem',
  },
}))

export const Initial = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Grid container xs={12} className={classes.root}>
      <Grid xs={2} md={3} />
      <Grid item xs={8} md={6}>
        <Paper elevation={3} className={classes.ButtonContainer}>
          <Button
            component={Link}
            to='/play'
            color='primary'
            className={classes.Buttons}
          >
            Create Room
          </Button>
          <Button
            color='secondary'
            onClick={handleClickOpen}
            className={classes.Buttons}
          >
            Enter Room ID
          </Button>
        </Paper>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title'>Enter a Room ID</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin='dense'
              id='roomId'
              label='Room ID'
              type='text'
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color='primary'>
              Cancel
            </Button>
            <Button onClick={handleClose} color='secondary'>
              Go
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
      <Grid xs={2} md={3} />
    </Grid>
  )
}
