import React from 'react' // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom'
import './index.css'
import App from './App' // eslint-disable-line no-unused-vars

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
