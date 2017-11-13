import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  loginContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2em',
    textAlign: 'center'
  },
  loginButton: {
    backgroundColor: '#00C457',
    border: 'none',
    fontSize: '1em',
    height: '4em',
    width: '20em',
    margin: '2em'
  },
  buttonLink: {
    color: 'white',
    fontFamily: 'Roboto',
    textDecoration: 'none'
  }
}

const LoginButton = ({ classes, url }) => {
  return (
    <div className={classes.loginContainer}>
      <button className={classes.loginButton}>
        <a className={classes.buttonLink} href={`${url}/auth/spotify`}>Login with Spotify</a>
      </button>
    </div>
  )
}

export default injectSheet(styles)(LoginButton)
