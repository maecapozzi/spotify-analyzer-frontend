import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const styles = {
  type: {
    color: '#5A6575'
  },
  value: {
    color: '#00C457'
  }
}

const AudioAnalysis = ({ classes, type, value }) => (
  <div>
    <span className={classes.type}>{type}: </span>
    <span className={classes.value}>{value}</span>
  </div>
)

AudioAnalysis.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}

export default injectSheet(styles)(AudioAnalysis)
