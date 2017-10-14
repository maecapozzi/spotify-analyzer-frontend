import React, { Component } from 'react'
import SongLink from './SongLink'

class SearchResults extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='search-results--container'>
        <div className='search-results--p'>
          {this.props.results.map((result) => {
            return <SongLink key={result.id} id={result.id} name={result.name} artist={result.artist} />
          })}
        </div>
      </div>
    )
  }
}

export default SearchResults
