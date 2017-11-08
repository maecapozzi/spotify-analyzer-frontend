import React, {Component} from 'react'
import axios from 'axios'
import SearchResults from './SearchResults'
import SearchBar from 'material-ui-search-bar'
import SongData from './SongData'

import { getSong } from '../lib/apiService'
import { getSongs } from '../lib/searchHelper'

class Home extends Component {
  constructor (props) {
    super(props)

    this.url = `${this.props.url}/search?`

    this.state = {
      value: '',
      results: '', 
      danceability: '',
      acousticness: '',
      energy: '',
      liveness: '',
      instrumentalness: '',
      loudness: '',
      speechiness: '',
      valence: '',
      title: '',
      artist: '',
      showSearchResults: true
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({ value: event })
  }

  handleSubmit () {
    const value = this.state.value
    getSong(value)
      .then(response => {
        if (response.status === 200) {
          const results = getSongs(response.data.results)
          this.setState({ results, showSearchResults: true })
        }
      })
      .catch((error) => {
        console.log(error)
      }
    )
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
          valence: response.data.valence, 
          showSearchResults: false
        })
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render () {
    if (!this.state.results) {
      return (
        <div>
          <h3 className='subheader'>Search for a song on Spotify and view the audio features of that song.</h3>
          <SearchBar
            className='search-bar'
            style={{ margin: '0 auto', maxWidth: 800, marginTop: 50 }}
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            onRequestSearch={this.handleSubmit}
          />
        </div>
      )
    } else if (this.state.showSearchResults) {
      return (
        <div>
          <h3 className='subheader'>Search for a song on Spotify and view the audio features of that song.</h3>
          <SearchBar
            className='search-bar'
            style={{ margin: '0 auto', maxWidth: 800, marginTop: 50 }}
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            onRequestSearch={this.handleSubmit}
          />
          <SearchResults
            handleClick={this.handleClick.bind(this)}
            label='Submit'
            results={this.state.results}
            url={this.props.url}
          />
        </div>
      )
    } else {
      return (
        <div>
          <h3 className='subheader'>Search for a song on Spotify and view the audio features of that song.</h3>
          <SearchBar
            className='search-bar'
            style={{ margin: '0 auto', maxWidth: 800, marginTop: 50 }}
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            onRequestSearch={this.handleSubmit}
          />
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
        </div>
      )
    }
  }
}

export default Home
