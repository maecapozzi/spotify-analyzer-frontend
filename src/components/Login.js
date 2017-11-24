import React from 'react'
import PropTypes from 'prop-types'
import LoginButton from './LoginButton'
import Header from './Header'

import injectSheet from 'react-jss'

const Login = ({ classes, url }) => (
  <div>
    <Header string={'Log In'} />
    <h3 className={classes.h3}>Please log in to get a better glimpse of that song you can't get out of your head.</h3>
    <LoginButton url={url} />
  </div>
)

Login.propTypes = {
  url: PropTypes.string
}

const styles = {
  h3: {
    textAlign: 'center',
    color: '#5A6575',
    fontFamily: 'Roboto'
  }
}

export default injectSheet(styles)(Login)
