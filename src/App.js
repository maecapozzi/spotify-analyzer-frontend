import React, { Component } from 'react'
import Home from './components/Home'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

class App extends Component {
  render () {
    return (
      <div>
        <MuiThemeProvider>
          <Home />
        </MuiThemeProvider>
      </div>
    )
  }
}

injectTapEventPlugin()
export default App
