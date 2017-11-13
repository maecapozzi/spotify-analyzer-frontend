import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  h1: {
    color: '#00C457',
    fontFamily: 'Roboto',
    marginLeft: '1em'
  }
}

const Header = ({classes, string}) => (
  <h1 className={classes.h1}>{string}</h1>
)

export default injectSheet(styles)(Header)
