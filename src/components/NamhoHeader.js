import React, {Component} from 'react'
import Login from './Login'
import Navbar from './Navbar'

import '../css/NamhoHeader.css'

class NamhoHeader extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return(
      <header className="App-header">
        <Login />
        <h2>NAMHO 2018</h2>
        <Navbar />
      </header>
    )
  }
}

export default NamhoHeader