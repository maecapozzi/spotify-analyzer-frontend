import React from 'react'
import SpotifyAuthButton from './SpotifyAuthButton'

const Login = ({ url }) => (
  <div>
    <h1 className='header'>Log In</h1>
    <SpotifyAuthButton url={url} />
  </div>
)

export default Login
