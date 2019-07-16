import React, {Component} from 'react'

import NamhoHeader from './components/NamhoHeader'
import Navbar from './components/Navbar'

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
        <Navbar />
      </div>
    )
  }
  
}

export default App
