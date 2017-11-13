import React from 'react'
import injectSheet from 'react-jss'

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

export default injectSheet(styles)(AudioAnalysis)
