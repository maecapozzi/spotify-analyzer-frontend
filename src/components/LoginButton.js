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
    color: 'white',
    cursor: 'pointer',
    fontSize: '1em',
    height: '4em',
    width: '20em',
    margin: '2em'
  },
  buttonLink: {
    fontFamily: 'Roboto',
    textDecoration: 'none'
  }
}

const LoginButton = ({ classes, url }) => {
  return (
    <div className={classes.loginContainer}>
      <a className={classes.buttonLink} href={`${url}/auth/spotify`}>
        <button className={classes.loginButton}>
          Login with Spotify
        </button>
      </a>
    </div>
  )
}

export default injectSheet(styles)(LoginButton)
