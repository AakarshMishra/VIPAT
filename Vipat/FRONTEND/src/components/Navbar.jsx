import React from 'react';
import logo from '../images/vitlogo.png'
import { Link } from 'react-scroll';

function Navbar() {
  const mycomponent4 =
    {
        fontWeight: 'bold',
        backgroundColor: 'white',
        opacity: '0.85',
        borderRadius: '25px',
    }
  return (
    <nav>
        <a href="#" className='logo'>
            <img src={logo} alt='logo'/>
        </a>
        <h1 className='p-2' style={mycomponent4}>VIPAT-THE PLACEMENT CELL</h1>
        <input className='menu-btn' type='checkbox' id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><a href="#" className='active'>Home</a></li>
            <li><Link to='about'><b>About</b></Link></li>
            <li><Link to='agent'><b>Login</b></Link></li>
            <li><Link to='ranks'><b>Ranking</b></Link></li>
            <li><Link to='contact'><b>Contact</b></Link></li>
            <li><Link to="gallery" ><b>Gallery</b></Link></li>
        </ul>
        
    </nav>
  )
}

export default Navbar
