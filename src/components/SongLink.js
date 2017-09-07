import React, { Component } from 'react'
import axios from 'axios'
import Results from './Results'

class SongLink extends Component {
  constructor (props) {
    super(props)
    this.state = {}

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    event.preventDefault()
    axios.get('/analyze/' + this.props.id)
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
        <div>
          <li onClick={this.handleClick}>
            {this.props.name} by {this.props.artist}
          </li>
        </div>
      )
    }
    return (
      <div>
        <li onClick={this.handleClick}>
          {this.props.name} by {this.props.artist}
        </li>
        <Results danceability={this.state.danceability} acousticness={this.state.acousticness} />
      </div>
    )
  }
}

export default SongLink
