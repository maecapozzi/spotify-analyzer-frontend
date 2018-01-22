import React, { Component } from 'react'

import { connect } from 'react-redux'
import axios from 'axios'
import PropTypes from 'prop-types'
import BodyCopy from './BodyCopy'
import Dashboard from './Dashboard'
import Header from './Header'
import SearchBar from 'material-ui-search-bar'
import SearchResults from './SearchResults'
// Todo: Refactor getSong & getSongs into redux
import { getSong } from '../lib/apiService'
import { getSongs } from '../lib/searchHelper'
import { collectUserInput } from '../actions/index'

export class Home extends Component {
  constructor (props) {
    super(props)
    this.url = `${this.props.url}/search?`
    this.state = {
      loadingPage: false,
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

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.setLoadingPage = this.setLoadingPage.bind(this)
    this.setHome = this.setHome.bind(this)
    this.setDashboard = this.setDashboard.bind(this)
    this.setLoadingScreen = this.setLoadingScreen.bind(this)
  }

  handleChange (event) {
    this.props.dispatch(collectUserInput(event))
  }

  handleSubmit () {
    const value = this.props.value
    getSong(value)
      .then(response => {
        if (response.status === 200) {
          const results = getSongs(response.data.results)
          this.setState({ results, showSearchResults: true })
        }
      })
      .catch(error => {
        if (error) {
          throw new Error('Could not get a response from the server!')
        }
      })
  }

  setLoadingPage () {
    this.setState({ loadingPage: true })
    setTimeout(() => this.setState({ loadingPage: false }), 6000)
  }

  handleClick (result) {
    this.setLoadingPage()
    let uri = this.props.url + '/analyze/' + result.id
    axios
      .get(uri, {
        withCredentials: true
      })
      .then(response => {
        if (response.status === 200) {
          const responseData = {
            audioFeatures: response.data[0],
            trackData: response.data[1],
            audioAnalysis: response.data[2]
          }
          this.setState({
            title: result.name,
            artist: result.artist,
            danceability: responseData.audioFeatures.danceability,
            acousticness: responseData.audioFeatures.acousticness,
            energy: responseData.audioFeatures.energy,
            liveness: responseData.audioFeatures.liveness,
            instrumentalness: responseData.audioFeatures.instrumentalness,
            loudness: responseData.audioFeatures.loudness,
            speechiness: responseData.audioFeatures.speechiness,
            valence: responseData.audioFeatures.valence,
            showSearchResults: false,
            albumLink: responseData.trackData.album.external_urls.spotify,
            popularity: responseData.trackData.popularity,
            albumImages: responseData.trackData.album.images,
            timeSignature: responseData.audioAnalysis.track.time_signature,
            tempo: responseData.audioAnalysis.track.tempo,
            songKey: responseData.audioAnalysis.track.key,
            duration: responseData.audioAnalysis.track.duration
          })
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  setHome () {
    return (
      <div>
        <Header string={'EARWORM'} />
        <BodyCopy
          string={
            'Search for a song on Spotify and view the audio features of that song'
          }
        />
        <SearchBar
          style={{
            margin: '0 auto',
            maxWidth: 800,
            marginTop: 50
          }}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          onRequestSearch={this.handleSubmit}
        />
      </div>
    )
  }

  setDashboard () {
    return (
      <div>
        {this.setHome()}
        <div className='song-data'>
          <Dashboard
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

  setLoadingScreen () {
    return <h1 className='loading-data'>Loading Data</h1>
  }

  render () {
    if (!this.state.results) {
      return this.setHome()
    } else if (this.state.loadingPage) {
      return this.setLoadingScreen()
    } else if (this.state.showSearchResults) {
      return (
        <div>
          {this.setHome()}
          <SearchResults
            handleClick={this.handleClick.bind(this)}
            label='Submit'
            results={this.state.results}
            url={this.props.url}
          />
        </div>
      )
    } else {
      return this.setDashboard()
    }
  }
}

Home.propTypes = {
  url: PropTypes.string.isRequired
}

const mapStateToProps = state => {
  return {
    value: state.value
  }
}

export default connect(mapStateToProps)(Home)
