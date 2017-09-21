import React, { Component } from 'react'

class SpotifyAuthButton extends Component {
  constructor () {
    super()

    let uri = process.env.API_URI || 'http://0.0.0.0:3001'
    this.url = `${uri}/auth/spotify`
  }

  render () {
    console.log(this.url)
    return <button><a href={this.url}>Login with Spotify</a></button>
  }
}

export default SpotifyAuthButton
