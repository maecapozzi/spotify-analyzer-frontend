import React, { Component } from 'react'  // eslint-disable-line no-unused-vars
import axios from 'axios'
import SearchResults from './SearchResults'

class SearchForm extends Component {
  constructor (props) {
    super(props)
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
    axios.get('/search?', {
      params: {
        track: this.state.value
      }
    })
      .then((response) => {
        if (response.status === 200) {
          const songs = []
          response.data.results.forEach(song => {
            songs.push(song.name)
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
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.value} onChange={this.handleChange} />
          <input type='submit' value='Submit' />
        </form>
      )
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.value} onChange={this.handleChange} />
          <input type='submit' value='Submit' />
        </form>
        <SearchResults results={this.state.results} />
      </div>
    )
  }
}

export default SearchForm
