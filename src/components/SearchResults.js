import React from 'react'

const SearchResults = props => (
  <div>
    <ul>
      {props.results.map((result) => {
        return <li key={result.id}><a>{result.name} by {result.artist}</a></li>
      })}
    </ul>
  </div>
)

export default SearchResults
