import React from 'react'
import SearchForm from './SearchForm'
import SpotifyAuthButton from './SpotifyAuthButton'

const Home = () => (
  <div>
    <h1>Home</h1>
    <SpotifyAuthButton />
    <SearchForm />
  </div>
)

export default Home
