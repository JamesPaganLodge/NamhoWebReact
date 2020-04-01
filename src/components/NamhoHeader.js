import React from 'react'
import Login from './Login'

import '../css/NamhoHeader.css'

function NamhoHeader(props) {
  return(
    <header>
      <Login />
      <div className="App-header">
        <h2>NAMHO 2018</h2>
      </div>        
    </header>
  )
}

export default NamhoHeader