import React from 'react'
import image from'../assets/image.jpg'

const Photos = () => {
  return (
    <div>
      <h1 className="title">My Photos</h1>
      <span></span>
    <div className="images">
      <img src={image}/>
      <img src={image}/>
      <img src={image}/>
      <img src={image}/>
      <img src={image}/>
      <img src={image}/>
    </div>
    </div>
  )
}

export default Photos
