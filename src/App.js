import React, { Component } from 'react'
import axios from 'axios'
import Home from './components/Home'
import Login from './components/Login'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

class App extends Component {
  constructor (props) {
    super(props)

    let uri = 'https://spotify-viz-api.herokuapp.com' || 'http://0.0.0.0:3001'
    this.url = `${uri}/tokens`

    this.state = {
      loggedIn: false,
      authenticateInProgress: false
    }
  }

  componentWillMount () {
    axios.get(this.url)
    .then((response) => {
      if (response.data === 'OK') {
        this.setState({ authenticateInProgress: true })
        setTimeout(() => this.setState({ loggedIn: true, authenticateInProgress: false }), 500)
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render () {
    if (this.state.authenticateInProgress) {
      return <h1>Loading ... </h1>
    } else if (!this.state.loggedIn && !this.state.authenticateInProgress) {
      return (
        <div className='login-container'>
          <Login />
        </div>
      )
    } else if (this.state.loggedIn && !this.state.authenticateInProgress) {
      return (
        <div>
          <Home />
        </div>
      )
    }
  }
}

injectTapEventPlugin()
export default App
