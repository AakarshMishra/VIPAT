import React from 'react'

function Agentbox(props) {
  const mycomponent={
    color:"white",
  }
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img onClick={props.onClick} src={props.image} alt=''/>
        </div>
        <div className='a-b-text'>
            <h3>{props.name}</h3>
            <a onClick={props.onClick} style={mycomponent} className='agent-btn'>Login</a>
        </div>
      
    </div>
  )
}

export default Agentbox
