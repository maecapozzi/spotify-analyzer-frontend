import React from 'react'
import PropTypes from 'prop-types'

import BodyCopy from './BodyCopy'
import Header from './Header'
import LoginButton from './LoginButton'
import injectSheet from 'react-jss'

const styles = {
  bodyCopy: {
    margin: '200em'
  }
}

const Login = ({ classes, url }) => (
  <div>
    <Header string={'earworm'} />
    <BodyCopy
      string={`earworm helps users understand why they love a song via 
         granular insights, while aiding and encouraging exploration 
         and discovery.`}
    />
    <LoginButton url={url} />
  </div>
)

Login.propTypes = {
  url: PropTypes.string
}

export default injectSheet(styles)(Login)
