import React from 'react';
import aboutimage from '../images/placed.png';
import aboutimage2 from '../images/placedtable.png'
import { Link } from 'react-scroll';
function About() {
  return (
    <div className='about' id="about">
        <div className='about-model'>
           <div className='about-text'>
            <h2>PLACEMENT RECORD:</h2>
           </div>
            <img src={aboutimage} alt='about image'/>

        </div>
        <div className='about-text'>
            <h2>We Are The Best <br/> Private Institute in India!</h2>
            <img src={aboutimage2} alt='about image'/>
            <a href="https://chennai.vit.ac.in/" target='_blank'><button><b>View More Details</b></button></a>
        </div>
      
    </div>
  )
}

export default About
