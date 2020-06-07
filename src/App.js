import React from 'react'
import { Route } from 'react-router-dom'
// components
import { Header } from './components/Header.js'
import { Footer } from './components/Footer.js'
import { Initial } from './components/Initial.js'
// pubnub
// import { PubNubReact } from 'pubnub-react'
// styles
import Grid from '@material-ui/core/Grid'

function App() {
  // setup pubnub
  // const pubnub = new PubNubReact({
  //   publishKey: process.env.PUBNUB_PUBLISH_KEY,
  //   subscribeKey: process.env.PUBNUB_SUBSCRIBE_KEY,
  // })

  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <Header />
      <Route path='/' component={Initial} />
      <Footer />
    </Grid>
  )
}

export default App
