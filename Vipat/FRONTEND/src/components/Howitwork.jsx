import React from 'react'
import rankimage1 from '../images/rank1.png'
import rankimage2 from '../images/rank2.png'
import rankimage3 from '../images/rank3.png'
import rankimage4 from '../images/rank4.png'
function Howitwork() {
   
    return (
        <div className='how-it-works' id='ranks'>
            <div className='container'>
                <h2 >WORLD RANKINGS</h2>
                <div className='flex'>
                    <div><img src={rankimage1}  alt='ranking'/></div>
                    <div><img src={rankimage2}  alt='ranking'/></div>
                    <div><img src={rankimage3}  alt='ranking'/></div>
                    {/* <img src={rankimage4}  alt='ranking'/> */}
                    {/* <div>
                        <span className='fas fa-home'></span>
                        <h4>Find a property</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit quisquam obcaecati, in illo molestiae beatae cum soluta debitis, dolor, alias rerum harum minus quidem laboriosam unde esse ducimus doloremque magnam.</p>
                    </div>
                    <div>
                        <span className='fas fa-dollar-sign'></span>
                        <h4>Find a property</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit quisquam obcaecati, in illo molestiae beatae cum soluta debitis, dolor, alias rerum harum minus quidem laboriosam unde esse ducimus doloremque magnam.</p>
                    </div>
                    <div>
                        <span className='fas fa-chart-line'></span>
                        <h4>Find a property</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit quisquam obcaecati, in illo molestiae beatae cum soluta debitis, dolor, alias rerum harum minus quidem laboriosam unde esse ducimus doloremque magnam.</p>
                    </div> */}
                    
                </div>
            </div>

        </div>
    )
}

export default Howitwork
