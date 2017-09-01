import React from 'react'

const SearchResults = props => (
  <div>
    <ul>
      {props.results.map((result, index) => {
        return <li key={index}>{result}</li>
      })}
    </ul>
  </div>
)

export default SearchResults
