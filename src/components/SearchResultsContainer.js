import React, { Component } from 'react'
import axios from 'axios'

import Paper from 'material-ui/Paper'
import SongData from './SongData'

class SearchResults extends Component {
  constructor (props) { 
    super (props)
    this.state = { 
      title: '', 
      artist: '',
      danceability: '',
      acousticness: '',
      energy: '',
      liveness: '',
      instrumentalness: '',
      loudness: '',
      speechiness: '',
      valence: ''
    }
  }

  handleClick (result) {
    let uri = this.props.url + '/analyze/' + result.id
    axios.get(uri, {
      withCredentials: true
    })
    .then((response) => {
      if (response.status === 200) {
        this.setState({
          title: result.name,
          artist: result.artist,
          danceability: response.data.danceability,
          acousticness: response.data.acousticness,
          energy: response.data.energy,
          liveness: response.data.liveness,
          instrumentalness: response.data.instrumentalness,
          loudness: response.data.loudness,
          speechiness: response.data.speechiness,
          valence: response.data.valence
        })
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render () { 
    if (!this.state.danceability) { 
      return (
        <div className='search-results__container'>
          <Paper style={{ maxWidth: 800, margin: '0 auto', padding: '20px' }}>
            <div className='search-results--p'>
              {this.props.results.map((result) => {
                return (
                  <ul className='search-results__ul' key={result.id} onClick={this.handleClick.bind(this, result)}>
                    {result.name} by {result.artist}
                  </ul>
                )
              })}
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
