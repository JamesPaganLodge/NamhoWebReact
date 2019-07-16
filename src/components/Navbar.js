import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import Home from '../pages/Home'
import Trips from '../pages/Trips'
import Bookings from '../pages/Bookings'
import Contact from '../pages/Contact'

import '../css/Navbar.css'

class Navbar extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <BrowserRouter>
        <nav>
          <ul className="nav-list">
            <li className="nav-item"><Link to={'/'} className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to={'/Trips'} className="nav-link">Trips</Link></li>
            <li className="nav-item"><Link to={'/Bookings'} className="nav-link">Bookings</Link></li>
            <li className="nav-item"><Link to={'/Contact'} className="nav-link">Contact</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/Trips' component={Trips} />
          <Route path='/Bookings' component={Bookings} />
          <Route path='/Contact' component={Contact} />
        </Switch>
      </BrowserRouter>      
    )
  }
}

export default Navbar
