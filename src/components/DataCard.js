import React from 'react'
import Card from 'material-ui/Card'
import injectSheet from 'react-jss'

const styles = {
  card: {
    border: '1px #272B2D solid',
    padding: '2em',
    backgroundColor: '#181A1B !important',
    height: '430px'
  }
}

const DataCard = ({classes, component}) => {
  return (
    <Card className={classes.card}>
      {component}
    </Card>
  )
}

export default injectSheet(styles)(DataCard)
