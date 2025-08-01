import React from 'react'
import Logo from '../img/logo.png'

function Footer() {
  return (
    <footer>
      <img src={Logo} alt='logo'/>
      <span>Made with <b>React.js</b>, Thank you Lama Dev</span>
    </footer>
  )
}

export default Footer