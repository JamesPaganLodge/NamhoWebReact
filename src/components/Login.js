import React from 'react'
import Modal from 'react-modal'

import avatar from '../images/avatar_default.png'
import '../css/Login.css'

const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

function Login(props) {
  const [modalIsOpen,setIsOpen] = React.useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div className="login-container">      
      {/* <p className="login-link">Login</p> */}
      <img className="login-avatar" 
        src={avatar}
        alt="Login/Sign up"
        onClick={openModal} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyle}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>X</button>
        <p>Text in the modal</p>        
      </Modal>
    </div>
  )
}

export default Login
