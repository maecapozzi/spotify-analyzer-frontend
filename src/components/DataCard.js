import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import Card from 'material-ui/Card'

const styles = {
  card: {
    border: '1px #272B2D solid',
    padding: '2em',
    backgroundColor: '#181A1B !important',
    height: '430px'
  }
}

const DataCard = ({ classes, component }) => {
  return <Card className={classes.card}>{component}</Card>
}

DataCard.propTypes = {
  component: PropTypes.object
}
export default injectSheet(styles)(DataCard)
