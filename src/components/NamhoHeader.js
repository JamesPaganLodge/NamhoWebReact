import React, {Component} from 'react'
import Login from './Login'

import '../css/NamhoHeader.css'

class NamhoHeader extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return(
      <header>
        <Login />
        <div className="App-header">
          <h2>NAMHO 2018</h2>
        </div>        
      </header>
    )
  }
}

export default NamhoHeader