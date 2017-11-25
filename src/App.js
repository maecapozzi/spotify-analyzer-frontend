import React, { Component } from 'react'
import axios from 'axios'
import ErrorBoundary from './components/ErrorBoundary'
import injectSheet from 'react-jss'

import Home from './components/Home'
import Login from './components/Login'

const styles = {
  errors: {
    color: '#00C457',
    fontFamily: 'Inconsolata',
    fontWeight: '300',
    textAlign: 'center'
  }
}

class App extends Component {
  constructor (props) {
    super(props)

    // this.url = 'https://spotify-viz-api.herokuapp.com'
    this.url = 'http://localhost:3001'

    this.state = {
      loggedIn: false,
      hasErrors: false
    }
  }

  componentWillMount () {
    axios.get(this.url, {
      withCredentials: true
    })
    .then((response) => {
      if (response.status === 200) {
        if (response.data.isAuthenticated) {
          this.setState({ loggedIn: true })
        } else if (!response.data.isAuthenticated) {
          this.setState({ loggedIn: false })
        }
      }
    })
    .catch((error) => {
      if (error) {
        this.setState(state => ({ ...state, hasErrors: true }))
      }
    })
  }

  componentDidCatch (error) {
    console.log(error)
  }

  render () {
    if (!this.state.loggedIn && !this.state.hasErrors) {
      return (
        <div className='login-container'>
          <ErrorBoundary>
            <Login url={this.url} />
          </ErrorBoundary>
        </div>
      )
    } else if (this.state.loggedIn && !this.state.hasErrors) {
      return (
        <div>
          <ErrorBoundary>
            <Home url={this.url} />
          </ErrorBoundary>
        </div>
      )
    } else {
      return <h1>Something has gone wrong.</h1>
    }
  }
}

export default injectSheet(styles)(App)
