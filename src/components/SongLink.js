import React, { Component } from 'react'
import axios from 'axios'
import SongData from './SongData'

class SongLink extends Component {
  constructor (props) {
    super(props)

    // let uri = 'https://spotify-viz-api.herokuapp.com' || 'http://0.0.0.0:3001'
    let uri = 'http://localhost:3001'
    this.url = `${uri}/analyze/`

    this.state = {}

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    event.preventDefault()
    axios.get(this.url + this.props.id, {
      withCredentials: true
    })
    .then((response) => {
      if (response.status === 200) {
        this.setState({
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
        <ul className='search-results--ul' onClick={this.handleClick}>
          {this.props.name} by {this.props.artist}
        </ul>
      )
    }
    return (
      <div className='song-data'>
        <h1>{this.props.name} by {this.props.artist}</h1>
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

export default SongLink
