import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import Paper from 'material-ui/Paper'
import SongLink from './SongLink'

const styles = {
  searchResultsContainer: {
    color: '#E1E5F2',
    fontFamily: 'Inconsolata',
    letterSpacing: '2px',
    marginTop: '20px'
  },
  p: {
    color: '#E1E5F2'
  }
}

const SearchResults = ({ classes, handleClick, results }) => (
  <div className={classes.searchResultsContainer}>
    <Paper
      style={{
        maxWidth: 800,
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#022B3A'
      }}
    >
      <div className={classes.p}>
        {results.map(result => (
          <SongLink
            key={result.id}
            result={result}
            handleClick={handleClick.bind(this, result)}
          />
        ))}
      </div>
    </Paper>
  </div>
)

SearchResults.propTypes = {
  handleClick: PropTypes.func,
  results: PropTypes.array
}

export default injectSheet(styles)(SearchResults)
