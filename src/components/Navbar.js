import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import Home from '../pages/Home'
import Trips from '../pages/Trips'
import Lectures from '../pages/Lectures'
import Walks from '../pages/Walks'
import Bookings from '../pages/Bookings'
import Food from '../pages/Food'
import Accommodation from '../pages/Accommodation'
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
            <li className="nav-item"><Link to={'/Lectures'} className="nav-link">Lectures</Link></li>
            <li className="nav-item"><Link to={'/Walks'} className="nav-link">Walks</Link></li>
            <li className="nav-item"><Link to={'/Bookings'} className="nav-link">Bookings</Link></li>
            <li className="nav-item"><Link to={'/Food'} className="nav-link">Food</Link></li>
            <li className="nav-item"><Link to={'/Accommodation'} className="nav-link">Accommodation</Link></li>
            <li className="nav-item"><Link to={'/Contact'} className="nav-link">Contact</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/Trips' component={Trips} />
          <Route path='/Lectures' component={Lectures} />
          <Route path='/Walks' component={Walks} />
          <Route path='/Bookings' component={Bookings} />
          <Route path='/Food' component={Food} />
          <Route path='/Accommodation' component={Accommodation} />
          <Route path='/Contact' component={Contact} />
        </Switch>
      </BrowserRouter>      
    )
  }
}

export default Navbar
