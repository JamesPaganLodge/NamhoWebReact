import React, {Component} from 'react'

import NamhoHeader from './components/NamhoHeader'

import './css/App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <NamhoHeader />
      </div>
    )
  }
  
}

export default App
