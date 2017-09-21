import React, { Component } from 'react'

class SpotifyAuthButton extends Component {
  constructor () {
    super()

    let uri = 'https://spotify-viz-frontend.herokuapp.com'
    this.url = `${uri}/auth/spotify`
  }

  render () {
    console.log(this.url)
    return <button><a href={this.url}>Login with Spotify</a></button>
  }
}

export default SpotifyAuthButton
