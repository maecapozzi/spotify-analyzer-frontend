import React, { Component } from 'react'
import axios from 'axios'

import Paper from 'material-ui/Paper'
import SongData from './SongData'
import SongLink from './SongLink'
 
class SearchResults extends Component {
  constructor (props) {
    super(props)

    this.state = {
      displaySearchResults: true
    }

  }

  render () {
    if (this.state.displaySearchResults) {
      return (
        <div className='search-results__container'>
          <Paper style={{ maxWidth: 800, margin: '0 auto', padding: '20px' }}>
            <div className='search-results--p'>
              {this.props.results.map(result => <SongLink key={result.id} result={result} handleClick={this.props.handleClick.bind(this, result)} /> )}
            </div>
          </Paper>
        </div>
      )
    } else {
      return (
        <div className='song-data'>
          <h3>{this.state.title} by {this.state.artist} </h3>
          <SongData
            danceability={this.state.danceability}
            acousticness={this.state.acousticness}
            energy={this.state.energy}
            liveness={this.state.liveness}
            instrumentalness={this.state.instrumentalness}
            speechiness={this.state.speechiness}
            valence={this.state.valence}
          />
        </div>
      )
    }
  }
}

export default SearchResults
