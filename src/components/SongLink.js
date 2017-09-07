import React, { Component } from 'react'
import axios from 'axios'
import Results from './Results'

class SongLink extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: this.props.id
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    event.preventDefault()
    axios.get('/analyze/' + this.state.id)
    .then((response) => {
      if (response.status === 200) {
        this.setState({
          danceability: response.data.danceability[0],
          acousticness: response.data.acousticness[0]
        })
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render () {
    if (!this.state.danceability) {
      return (
        <div>
          <li onClick={this.handleClick}>
            {this.props.name} by {this.props.artist}
          </li>
        </div>
      )
    }
    return (
      <div>
        <Results danceability={this.state.danceability} acousticness={this.state.acousticness} />
      </div>
    )
  }
}

export default SongLink
