import React from 'react'
import PropTypes from 'prop-types'
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
    borderRadius: '30px',
    color: 'white',
    cursor: 'pointer',
    fontFamily: 'Inconsolata',
    fontSize: '1em',
    height: '4em',
    width: '20em',
    margin: [20, 20]
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
        <button className={classes.loginButton}>LOGIN WITH SPOTIFY</button>
      </a>
    </div>
  )
}

LoginButton.propTypes = {
  url: PropTypes.string
}

export default injectSheet(styles)(LoginButton)
