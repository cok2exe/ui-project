import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'react-app-polyfill/ie9' // for IE9+
import 'core-js/es/map' // for IE
import 'core-js/es/set' // for IE

ReactDOM.render(<App />, document.getElementById('root'))
