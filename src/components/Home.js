import React, { Component } from 'react'
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
      loadingPage: false,
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
    this.setLoadingPage = this.setLoadingPage.bind(this)
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

  setLoadingPage () {
    this.setState({loadingPage: true})
    setTimeout(() => this.setState({loadingPage: false}), 6000)
  }

  handleClick (result) {
    this.setLoadingPage()
    let uri = this.props.url + '/analyze/' + result.id
    axios.get(uri, {
      withCredentials: true
    })
    .then((response) => {
      const audioFeatures = response.data[0]
      const trackData = response.data[1]
      const audioAnalysis = response.data[2]
      if (response.status === 200) {
        this.setState({
          title: result.name,
          artist: result.artist,
          danceability: audioFeatures.danceability,
          acousticness: audioFeatures.acousticness,
          energy: audioFeatures.energy,
          liveness: audioFeatures.liveness,
          instrumentalness: audioFeatures.instrumentalness,
          loudness: audioFeatures.loudness,
          speechiness: audioFeatures.speechiness,
          valence: audioFeatures.valence,
          showSearchResults: false,
          albumLink: trackData.album.external_urls.spotify,
          popularity: trackData.popularity,
          albumImages: trackData.album.images,
          timeSignature: audioAnalysis.track.time_signature,
          tempo: audioAnalysis.track.tempo,
          songKey: audioAnalysis.track.key,
          duration: audioAnalysis.track.duration
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
          <h1>Ear Worm</h1>
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
    } else if (this.state.loadingPage) {
      return <h1>Loading Data</h1>
    } else if (this.state.showSearchResults) {
      return (
        <div>
          <h1>Ear Worm</h1>
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
          <h1>Ear Worm</h1>
          <h3 className='subheader'>Search for a song on Spotify and view the audio features of that song.</h3>
          <SearchBar
            className='search-bar'
            style={{ margin: '0 auto', maxWidth: 800, marginTop: 50 }}
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            onRequestSearch={this.handleSubmit}
          />
          <div className='song-data'>
            <SongData
              title={this.state.title}
              artist={this.state.artist}
              danceability={this.state.danceability}
              acousticness={this.state.acousticness}
              energy={this.state.energy}
              liveness={this.state.liveness}
              instrumentalness={this.state.instrumentalness}
              speechiness={this.state.speechiness}
              valence={this.state.valence}
              albumLink={this.state.albumLink}
              popularity={this.state.popularity}
              albumImages={this.state.albumImages}
              timeSignature={this.state.timeSignature}
              tempo={this.state.tempo}
              songKey={this.state.songKey}
              loudness={this.state.loudness}
              duration={this.state.duration}
            />
          </div>
        </div>
      )
    }
  }
}

export default Home
