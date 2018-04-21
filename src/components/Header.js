import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = {
  h1: {
    color: '#BFDBF7',
    fontFamily: 'Inconsolata',
    fontWeight: '300',
    letterSpacing: '3px',
    textAlign: 'center',
    marginTop: '5em'
  }
}

const Header = ({ classes, string }) => <h1 className={classes.h1}>{string}</h1>

Header.propTypes = {
  string: PropTypes.string
}

export default injectSheet(styles)(Header)
