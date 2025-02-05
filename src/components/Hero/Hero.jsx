import React from 'react'
import bgImage from '../../assets/Bg.jpg'
import './Hero.css'
function Hero() {
  return (
    <div className="Container">
      <div className="intro">
        <h1 className="title">Hi I'm Aashish Adhikari.</h1>
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum corporis quisquam ad porro doloremque qui facilis, cum, ratione tenetur perspiciatis culpa, quasi odio vitae delectus.</p>
      </div>
      <div className="profile-pic">
        <img src={bgImage} alt="background image" />
      </div>
    </div>
  )
}

export default Hero
