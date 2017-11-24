import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const styles = {
  value: {
    color: '#00C457'
  }
}

const AudioAnalysis = ({classes, type, value}) => (
  <div>
    <p>
      <span>{type}: </span>
      <span className={classes.value}>{value}</span>
    </p>
  </div>
)

AudioAnalysis.propTypes = { 
  type: PropTypes.string,
  value: PropTypes.number
}

export default injectSheet(styles)(AudioAnalysis)
