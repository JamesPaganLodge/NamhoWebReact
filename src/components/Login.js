import React from 'react'
import avatar from '../images/avatar_default.png'
import '../css/Login.css'

function Login(props) {
  return (
    <div className="login-container">      
      {/* <p className="login-link">Login</p> */}
      <img className="login-avatar" 
        src={avatar}
        alt="Login/Sign up" />
    </div>
  )
}

export default Login
