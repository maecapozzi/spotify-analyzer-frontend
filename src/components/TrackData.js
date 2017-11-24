import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const styles = {
  h3: {
    color: '#00C457'
  }
}

const TrackData = ({classes, title, artist, albumLink, albumImages}) => (
  <div>
    <h3 className={classes.h3}>{title} by {artist}</h3>
    <a target='#' href={albumLink}>
      <img src={albumImages[1].url} alt='Album Cover' />
    </a>
  </div>
)

TrackData.propTypes = {
  title: PropTypes.string, 
  artist: PropTypes.string, 
  albumLink: PropTypes.string,
  albumImages: PropTypes.array
}

export default injectSheet(styles)(TrackData)
