import React, { Component } from 'react'
import axios from 'axios'
import Home from './components/Home'

class App extends Component {
  state = {
    tracks: []
  }

  componentDidMount() {
    axios.get('http://localhost:3001/')
      .then(tracks => this.setState({ tracks }))
  }

  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App
