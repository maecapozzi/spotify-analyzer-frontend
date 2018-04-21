import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const styles = {
  h3: {
    color: '#FFFFFF',
    fontFamily: 'Inconsolata',
    fontWeight: '300',
    letterSpacing: '2px',
    padding: [20, 20],
    textAlign: 'center'
  }
}

const BodyCopy = ({ classes, copy }) => <h3 className={classes.h3}>{copy}</h3>

BodyCopy.propTypes = {
  string: PropTypes.copy
}

export default injectSheet(styles)(BodyCopy)
