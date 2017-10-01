import React from 'react'
import SearchForm from './SearchForm'

const Home = () => (
  <div>
    <h1 className='header'><a className='home-button' href='/'>Home</a></h1>
    <h3 className='subheader'>Search for a song on Spotify and view the audio features of that song.</h3>
    <SearchForm />
  </div>
)

export default Home
