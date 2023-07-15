import React from 'react'
import ReactPlayer from 'react-player'

function Propertiesbox(props) {
  return (
    <div className='p-box'>
        {/* <img src={props.image} alt='product'/>
        <p>{props.name}</p> 
        <a href="#" className='price'>{props.price}</a>
        <a href="#" className='buy-btn'>Add to Cart</a>      */}
        <ReactPlayer url={props.link} width='90%' height='90%' style={{borderRadius:'20px'}}/>
    </div>
  )
}

export default Propertiesbox
