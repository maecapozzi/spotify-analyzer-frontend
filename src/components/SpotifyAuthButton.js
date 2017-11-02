import React from 'react'

const SpotifyAuthButton = ({ url }) => {
  return (
    <div className='login-container'>
      <button className='login-button'>
        <a className='login-button' href={`${url}/auth/spotify`}>Login with Spotify</a>
      </button>
    </div>
  )
}

export default SpotifyAuthButton
