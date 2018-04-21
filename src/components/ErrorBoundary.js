import React, { Component } from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const styles = {
  h1: {
    color: '#BFDBF7',
    fontFamily: 'Inconsolata',
    textAlign: 'center'
  }
}

class ErrorBoundary extends Component {
  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch (error, info) {
    if (error) {
      this.setState(state => ({ ...state, hasError: true }))
    }
  }

  render () {
    if (this.state.hasError) {
      return <h1 className={this.props.classes.h1}>Something went wrong.</h1>
    }
    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.object
}

export default injectSheet(styles)(ErrorBoundary)
