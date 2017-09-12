import React, { Component } from 'react'
import axios from 'axios'

class SpotifyAuthButton extends Component {
  constructor (props) {
    super(props)
    this.state = {}

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    event.preventDefault()
    axios.get('/login')
      .then((response) => {
        if (response.status === 200) {
          window.location = response.data
        }
      })
      .catch((error) => {
        console.log(error)
      }
    )
  }

  render () {
    return (
      <div>
        <button onClick={this.handleClick}>Login</button>

      </div>
    )
  }
}

export default SpotifyAuthButton
