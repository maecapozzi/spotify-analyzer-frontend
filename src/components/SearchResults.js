import React from 'react'
import SongLink from './SongLink'

const SearchResults = props => (
  <div>
    <ul>
      {props.results.map((result) => {
        return <SongLink key={result.id} id={result.id} name={result.name} artist={result.artist} />
      })}
    </ul>
  </div>
)

export default SearchResults
