import React, { Component } from 'react'
import axios from 'axios'
import SearchResults from './SearchResults'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import SearchBar from 'material-ui-search-bar'

class SearchForm extends Component {
  constructor (props) {
    super(props)

    let uri = 'https://spotify-viz-api.herokuapp.com'
    // let uri = 'http://localhost:3001'
    this.url = `${uri}/search?`

    this.state = {
      value: '',
      results: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({value: event})
  }

  handleSubmit () {
    axios.get(this.url, {
      withCredentials: true,
      params: {
        track: this.state.value
      }
    })
      .then((response) => {
        if (response.status === 200) {
          const songs = []
          response.data.results.forEach(song => {
            songs.push({
              id: song.id,
              name: song.name,
              artist: song.artists[0].name
            })
          })
          this.setState({results: songs })
        }
      })
      .catch((error) => {
        console.log(error)
      }
    )
  }

  render () {
    if (!this.state.results) {
      return (
        <SearchBar
          className='search-bar'
          style={{ margin: '0 auto', maxWidth: 800, marginTop: 50}}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          onRequestSearch={this.handleSubmit}
        />
      )
    }
    return (
      <div>
        <SearchBar
          className='search-bar'
          style={{ margin: '0 auto', maxWidth: 800, marginTop: 50}}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          onRequestSearch={this.handleSubmit}
        />
        <SearchResults label='Submit' results={this.state.results} />
      </div>
    )
  }
}

export default SearchForm
