import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import Home from '../pages/Home'
import Trips from '../pages/Trips'
import Bookings from '../pages/Bookings'
import Contact from '../pages/Contact'

class Navbar extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/Trips'}>Trips</Link></li>
            <li><Link to={'/Bookings'}>Bookings</Link></li>
            <li><Link to={'/Contact'}>Contact</Link></li>
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
