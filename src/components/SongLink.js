import React from 'react'

const SongLink = (props) => (          
  <ul className='search-results__ul' key={props.result.id} onClick={props.handleClick}>
    {props.result.name} by {props.result.artist}
  </ul>
)

export default SongLink

