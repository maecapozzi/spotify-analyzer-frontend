import React, { Component } from 'react'
import axios from 'axios'
import Home from './components/Home'

class App extends Component {

  componentDidMount() {
    axios.get('http://localhost:3001/')
    .then(response => {
      console.log(response)
    })
    .catch(error => {
    	console.log(error)
    })
  }

  render() {
    return <Home /> 
  }
}

export default App
