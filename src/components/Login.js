import React from 'react'
import PropTypes from 'prop-types'

import BodyCopy from './BodyCopy'
import Header from './Header'
import LoginButton from './LoginButton'

const Login = ({ classes, url }) => (
  <div>
    <Header string={'EARWORM'} />
    <BodyCopy string={ 
      'Earworm allows you to learn more about the songs you love. Search for old and new favorites and see Spotify data visualizations about them.'
    } />
    <LoginButton url={url} />
  </div>
)

Login.propTypes = {
  url: PropTypes.string
}

export default Login
