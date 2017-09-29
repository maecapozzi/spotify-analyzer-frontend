import React, { Component } from 'react'
import axios from 'axios'
import SearchResults from './SearchResults'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class SearchForm extends Component {
  constructor (props) {
    super(props)

    let uri = 'http://localhost:3001'
    this.url = `${uri}/search?`

    this.state = {
      value: '',
      results: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({value: event.target.value})
  }

  handleSubmit (event) {
    event.preventDefault()
    axios.get(this.url, {
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
          this.setState({results: songs})
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
        <form className='search-form' onSubmit={this.handleSubmit}>
          <input className='search-form--input' name='search' type='text' value={this.state.value} onChange={this.handleChange} />
          <input className='search-form--submit' label='Submit' type='submit' value='Submit' />
        </form>
      )
    }
    return (
      <div>
        <form className='search-form' onSubmit={this.handleSubmit}>
          <input className='search-form--input' name='search' type='text' value={this.state.value} onChange={this.handleChange} />
          <input className='search-form--submit' label='submit' type='submit' value='Submit' />
        </form>
        <SearchResults label='Submit' results={this.state.results} />
      </div>
    )
  }
}

export default SearchForm
