import React, { Component } from 'react'
import SongLink from './SongLink'

class SearchResults extends Component {
  constructor (props) {
    super()
  }

  render () {
    return (
      <div>
        <ul>
          {this.props.results.map((result) => {
            return <SongLink key={result.id} id={result.id} name={result.name} artist={result.artist} />
          })}
        </ul>
      </div>
    )
  }
}

export default SearchResults
