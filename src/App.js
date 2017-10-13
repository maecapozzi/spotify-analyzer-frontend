import React, { Component } from 'react'
import axios from 'axios'
import Home from './components/Home'
import Login from './components/Login'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

class App extends Component {
  constructor (props) {
    super(props)

    // let uri = 'https://spotify-viz-api.herokuapp.com' || 'http://0.0.0.0:3001'
    let uri = 'http://0.0.0.0:3001'
    this.url = 'http://localhost:3001'

    this.state = {
      loggedIn: false
    }
  }

  componentWillMount () {
    axios.get(this.url)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render () {
    if (!this.state.loggedIn) {
      return (
        <div className='login-container'>
          <Login />
        </div>
      )
    } else if (this.state.loggedIn) {
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
