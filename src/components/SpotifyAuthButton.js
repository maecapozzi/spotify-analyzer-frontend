import React, { Component } from 'react'

class SpotifyAuthButton extends Component {
  constructor () {
    super()

    // let uri = 'https://spotify-viz-api.herokuapp.com' || 'http://0.0.0.0:3001'
    let uri = 'http://localhost:3001'
    this.url = `${uri}/auth/spotify`
  }

  render () {
    return (
      <div className='login-container'>
        <button className='login-button'>
          <a className='login-button' href={this.url}>Login with Spotify</a>
        </button>
      </div>
    )
  }
}

export default SpotifyAuthButton
