import React from 'react'

import Paper from 'material-ui/Paper'
import SongLink from './SongLink'

const SearchResults = props => (
  <div className='search-results__container'>
    <Paper style={{ maxWidth: 800, margin: '0 auto', padding: '20px' }}>
      <div className='search-results--p'>
        {props.results.map(result =>
          <SongLink key={result.id} result={result} handleClick={props.handleClick.bind(this, result)} />
        )}
      </div>
    </Paper>
  </div>
)

export default SearchResults
