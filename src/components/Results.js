import React from 'react'

const Results = props => (
  <div>
    <p>danceability: {props.danceability}</p>
    <p>acousticness: {props.acousticness}</p>
    <p>energy: {props.energy}</p>
    <p>liveness: {props.liveness}</p>
    <p>instrumentalness: {props.instrumentalness}</p>
    <p>loudness: {props.loudness}</p>
    <p>speechiness: {props.speechiness}</p>
    <p>valence: {props.valence}</p>
  </div>
)

export default Results
