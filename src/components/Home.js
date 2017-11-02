import React, {Component} from 'react'
import SearchResultsContainer from './SearchResultsContainer'
import SearchBar from 'material-ui-search-bar'

import { getSong } from '../lib/apiService'
import { getSongs } from '../lib/searchHelper'

class Home extends Component {
  constructor (props) {
    super(props)

    this.url = `${this.props.url}/search?`

    this.state = {
      value: '',
      results: '',
      isHidden: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({value: event})
  }

  handleSubmit () {
    const value = this.state.value
    getSong(value)
      .then(response => {
        if (response.status === 200) {
          const results = getSongs(response.data.results)
          this.setState({ results })
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
        <div>
          <h3 className='subheader'>Search for a song on Spotify and view the audio features of that song.</h3>
          <SearchBar
            className='search-bar'
            style={{ margin: '0 auto', maxWidth: 800, marginTop: 50 }}
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            onRequestSearch={this.handleSubmit}
          />
        </div>
      )
    }
    return (
      <div>
        <h3 className='subheader'>Search for a song on Spotify and view the audio features of that song.</h3>
        <SearchBar
          className='search-bar'
          style={{ margin: '0 auto', maxWidth: 800, marginTop: 50 }}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          onRequestSearch={this.handleSubmit}
        />
        <SearchResultsContainer
          label='Submit'
          results={this.state.results}
          url={this.props.url}
        />
      </div>
    )
  }
}

export default Home
