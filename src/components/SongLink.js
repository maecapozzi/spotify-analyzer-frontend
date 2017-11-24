import React from 'react'
import PropTypes from 'prop-types'

const SongLink = props => (
  <ul className='search-results__ul' key={props.result.id} onClick={props.handleClick}>
    {props.result.name} by {props.result.artist}
  </ul>
)

SongLink.propTypes = {
  handleClick: PropTypes.func,
  result: PropTypes.object
}

export default SongLink
