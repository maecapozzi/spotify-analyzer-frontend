import React from 'react'

const AudioAnalysis = ({timeSignature, tempo, songKey, duration}) => (
  <div>
    <p>Time Signature: {timeSignature}</p>
    <p>Tempo: {tempo}</p>
    <p>Key: {songKey}</p>
    <p>Duration: {duration}</p>
  </div>
)

export default AudioAnalysis
