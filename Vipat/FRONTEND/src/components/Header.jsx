import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-scroll';
import Howitwork from './Howitwork';
import About from './About';
import Agent from './Agent';
import Properties from './Properties';
import Contact from './Contact';
import videobg from '../assets/background.mp4'

function Header() {
    
    return (
        <>
        <div className='header' id='header'>
            <Navbar />
            <div className="overlay"></div>
            <video autoPlay loop muted >
                <source src={videobg} type='video/mp4'/>
            </video>
            <div className='intro'>
                <p>Looking for the Best institution!</p>
                <h1><span>Welcome </span>to<span> Vit</span> Chennai</h1>
                <p className='details'>VIT Chennai, one of the leading engineering colleges in India, offers the best exposure in terms of world class education, internship opportunities, top-notch placement opportunities, and infrastructural amenities. We ensure that the graduates walk out with many skills and learning.</p>
                <Link to='agent' className='header-btn'><b>LOGIN </b></Link>

            </div>
        </div>
        <Agent />
        <About />
        <Howitwork />
        <Properties />
        <Contact />
        </>


    )
}

export default Header
