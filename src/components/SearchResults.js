import React from 'react'
import PropTypes from 'prop-types'

import Paper from 'material-ui/Paper'
import SongLink from './SongLink'

const SearchResults = props => (
  <div className='search-results__container'>
    <Paper style={{ maxWidth: 800, margin: '0 auto', padding: '20px', backgroundColor: '#181A1B' }}>
      <div className='search-results--p'>
        {props.results.map(result =>
          <SongLink key={result.id} result={result} handleClick={props.handleClick.bind(this, result)} />
        )}
      </div>
    </Paper>
  </div>
)

SearchResults.propTypes = {
  handleClick: PropTypes.func,
  results: PropTypes.array
}

export default SearchResults
