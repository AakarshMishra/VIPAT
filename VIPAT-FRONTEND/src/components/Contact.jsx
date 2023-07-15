import React from 'react'
import logo from '../images/vitlogo.png'
import { Link } from 'react-scroll';
import fb from '../images/facebook.png'
import insta from '../images/instagram.png'
import twitter from '../images/twitter.png'
import yt from '../images/youtube.png'
import linkedin from '../images/linkedlin.png'
function Contact() {
  const mycomponent ={
    background:"none",
    backgroundColor: "#17a2b8",
  }
  const mycomponent4 =
  {
      fontWeight: 'bold',
      backgroundColor: 'white',
      opacity: '0.85',
      borderRadius: '25px',
      
  }
  return (
    <footer style={mycomponent} id='contact'>
        <a href="#" className='logo'>
            <img src={logo} alt='logo'/>
        </a>
        <h1 className='p-2' style={mycomponent4}>Connect With Us!</h1>
        <input className='menu-btn' type='checkbox' id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><a href='https://www.facebook.com/VITCChennai/' target='_blank'><img src={fb} alt='logo'/></a></li>
            <li><a href='https://www.instagram.com/vit.chennai/' target='_blank'><img src={insta} alt='logo'/></a></li>
            <li><a href='https://twitter.com/ChennaiVit' target='_blank'><img src={twitter} alt='logo'/></a></li>
            <li><a href='https://www.youtube.com/c/VITChennaic' target='_blank'><img src={yt} alt='logo'/></a></li>
            <li><a href='https://www.linkedin.com/company/vitchennai' target='_blank'><img src={linkedin} alt='logo'/></a></li>
        </ul>
        
    </footer>
  )
}

export default Contact
