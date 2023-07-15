import React from 'react';
import Propertiesbox from './Propertiesbox';
import pimage1 from '../images/p1.png'
import pimage2 from '../images/p2.png'
import pimage3 from '../images/p3.png'
import image1 from '../assets/img1.png'
import image2 from '../assets/img2.png'
import image3 from '../assets/img3.png'
import image4 from '../assets/img4.png'
import image5 from '../assets/img5.png'
import image6 from '../assets/img6.png'
import image7 from '../assets/img7.png'
import image8 from '../assets/img8.png'
import image9 from '../assets/img9.png'
import image10 from '../assets/img10.png'
function Properties() {
  return (
    <div className='product' id='gallery'>
      <div className='p-heading'>
        <h3>Video Gallery</h3>
        <p>Look these videos for more information!</p>
      </div>
      <div className='product-container'>
        <Propertiesbox link='https://youtu.be/ycsL8jCuYWg' />
        <Propertiesbox link='https://youtu.be/c1ey0C-BaQI' />
        <Propertiesbox link='https://youtu.be/18eVhNyOvpI' />
      </div>
      <div className='p-heading'>
        <h3>Image Gallery</h3>
      </div>
      <section id="marquee">
        <div class="container">
          <div class="pic-container">
            <div class="pic">
              <img src={image1} alt="img" />
            </div>
            <div class="pic">
              <img src={image2} alt="img" />
            </div>
            <div class="pic">
              <img src={image3} alt="img" />
            </div>
            <div class="pic">
              <img src={image4} alt="img" />
            </div>
            <div class="pic">
              <img src={image5} alt="img" />
            </div>
            <div class="pic">
              <img src={image6} alt="img" />
            </div>
            <div class="pic">
              <img src={image7} alt="img" />
            </div>
            <div class="pic">
              <img src={image8} alt="img" />
            </div>
            <div class="pic">
              <img src={image9} alt="img" />
            </div>
            <div class="pic">
              <img src={image10} alt="img" />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Properties
