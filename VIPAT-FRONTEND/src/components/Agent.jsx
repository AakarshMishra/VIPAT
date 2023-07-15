import React from 'react';
import Agentbox from './Agentbox';
import agentimage1 from '../images/dean.jpg';
import agentimage2 from '../images/proctor.png';
import agentimage3 from '../images/s3.png';
import agentimage4 from '../images/company.avif'
function Agent() {
  return (
    <div className='agent' id='agent'>
        <div className='a-heading'>
            <h1>LOGIN <span>PROFILES</span></h1>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil placeat doloremque quod fugiat aspernatur quasi, rem sequi aperiam reprehenderit dolorum!</p> */}

        </div>
        <div className='b-container'>
            <Agentbox onClick={() => window.location.href = '/Dlogin'} image={agentimage1} name="DEAN" />
            <Agentbox onClick={() => window.location.href = '/Plogin'} image={agentimage2} name="PROCTOR" />
            <Agentbox onClick={() => window.location.href = '/Slogin'} image={agentimage3} name="STUDENT" />
            <Agentbox onClick={() => window.location.href = '/Clogin'} image={agentimage4} name="COMPANY" />
        </div>
      
    </div>
  )
}

export default Agent
