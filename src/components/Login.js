import React from 'react'
import LoginButton from './LoginButton'
import Header from './Header'

import injectSheet from 'react-jss'

const styles = {
  h3: {
    textAlign: 'center',
    color: '#5A6575',
    fontFamily: 'Roboto'
  }
}

const Login = ({ classes, url }) => (
  <div>
    <Header string={'Log In'} />
    <h3 className={classes.h3}>Please log in to get a better glimpse of that song you can't get out of your head.</h3>
    <LoginButton url={url} />
  </div>
)

export default injectSheet(styles)(Login)
