import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const styles = {
  h3: {
    color: '#5A6575',
    fontFamily: 'Inconsolata',
    fontWeight: '300',
    letterSpacing: '2px',
    padding: [20, 20],
    textAlign: 'center'
  }
}

const BodyCopy = ({ classes, string }) => (
  <h3 className={classes.h3}>{string}</h3>
)

BodyCopy.propTypes = {
  string: PropTypes.string
}

export default injectSheet(styles)(BodyCopy)
