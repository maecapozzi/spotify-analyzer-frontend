import React from 'react'

const TrackData = props => (
  <div>
    <h3>{props.title} by {props.artist}</h3>
    <a target='#' href={props.albumLink}>
      <img src={props.albumImages[1].url} alt='album cover' />
    </a>
  </div>
)

export default TrackData
