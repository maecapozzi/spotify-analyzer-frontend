import React, { Component } from 'react'
import axios from 'axios'
import Home from './components/Home'
import Login from './components/Login'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loggedIn: false,
      authenticateInProgress: false
    }
  }

  componentWillMount () {
    axios.get('/tokens')
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
        <div>
          <MuiThemeProvider>
            <Login />
          </MuiThemeProvider>
        </div>
      )
    } else if (this.state.loggedIn && !this.state.authenticateInProgress) {
      return (
        <div>
          <MuiThemeProvider>
            <Home />
          </MuiThemeProvider>
        </div>
      )
    }
  }
}

injectTapEventPlugin()
export default App
