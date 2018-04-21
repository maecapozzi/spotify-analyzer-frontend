import React, { Component } from 'react'
import axios from 'axios'
import ErrorBoundary from './components/ErrorBoundary'
import injectSheet from 'react-jss'

import Home from './components/Home'
import Login from './components/Login'

import { API_ROOT } from './api-config'

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

    this.url = API_ROOT

    this.state = {
      loggedIn: 'isNotLoggedIn',
      hasErrors: false
    }
  }

  componentWillMount () {
    axios
      .get(this.url, {
        withCredentials: true
      })
      .then(response => {
        if (response.status === 200) {
          if (response.data.isAuthenticated) {
            this.setState({ loggedIn: 'isLoggedIn' })
          } else if (!response.data.isAuthenticated) {
            this.setState({ loggedIn: 'isNotLoggedIn' })
          }
        }
      })
      .catch(error => {
        if (error) {
          this.setState(state => ({ ...state, hasErrors: true }))
        }
      })
  }

  componentDidCatch (error) {
    console.log(error)
  }

  render () {
    if (!this.state.loggedIn === 'isNotLoggedIn' && !this.state.hasErrors) {
      return (
        <div className='login-container'>
          <ErrorBoundary>
            <Login url={this.url} />
          </ErrorBoundary>
        </div>
      )
    } else if (this.state.loggedIn === 'isLoggedIn' && !this.state.hasErrors) {
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
