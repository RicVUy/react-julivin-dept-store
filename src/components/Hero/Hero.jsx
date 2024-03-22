import React from 'react'
import './Hero.css' 


 const Hero = () => {
  return (
    <div className='hero'>
<div className="hero-left">
    <h2>NEW ARRIVALS</h2>
    <div>
        <div className='hand-hand-icon'>
            <p>new</p>
            <img src={"https://cdn.iconscout.com/icon/premium/png-512-thumb/marketing-1715371-1456153.png?f=webp&w=256"} alt="" />
        </div>
        <p>collections</p>
        <p>for everyone</p>
    </div>
    <div className="hero-latest-btn">
        <div>LATEST COLLECTION</div>
        <img src={"https://cdn.iconscout.com/icon/premium/png-512-thumb/login-2651140-2198240.png?f=webp&w=256"} alt="" />
    </div>
    </div>
    <div className="hero-right">
  <img src={"https://thumbs.dreamstime.com/b/beautiful-girl-wearing-fashion-dress-field-lavender-beautiful-girl-wearing-fashion-dress-field-lavender-provence-309984333.jpg?w=768"} alt=''/>
    </div>
    </div>
  )
}
export default Hero;