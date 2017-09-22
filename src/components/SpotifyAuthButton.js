import React, { Component } from 'react'

class SpotifyAuthButton extends Component {
  constructor () {
    super()

    let uri = 'https://spotify-viz-api.herokuapp.com'
    this.url = `${uri}/auth/spotify`
  }

  render () {
    return (
      <button>
        <a href={this.url}>Login with Spotify</a>
      </button>
    )
  }
}

export default SpotifyAuthButton
