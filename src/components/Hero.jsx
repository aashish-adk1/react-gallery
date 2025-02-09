import React from 'react'
import profileImg from '../assets/profile-pic.jpg'
function Hero() {
  return (
    <div className="container">
      <div className="intro">
        <h1 className="title">Hi I'm Aashish Adhikari.</h1>
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum corporis quisquam ad porro doloremque qui facilis, cum, ratione tenetur perspiciatis culpa, quasi odio vitae delectus.</p>
        <button className="learnmore">Learn More</button>

      </div>
      <div className="profile-pic">
        <img src={profileImg} alt="Profile Picture" />
      </div>
    </div>
  )
}

export default Hero
