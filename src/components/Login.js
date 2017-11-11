import React from 'react'
import SpotifyAuthButton from './SpotifyAuthButton'

const Login = ({ url }) => (
  <div>
    <h1 className='header'>Log In</h1>
    <h3 className='subtitle'>Please log in to get a better glimpse of that song you can't get out of your head.</h3>
    <SpotifyAuthButton url={url} />
  </div>
)

export default Login
