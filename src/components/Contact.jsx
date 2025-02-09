import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1 className="title">Contact Me</h1>
      <span></span>
      <div className="form">
        <form className='fform'>
            <div className="names">
            <label htmlFor="firstName">First Name:
            <input type="text" placeholder='First Name' id='firstName' required/></label>
            <label htmlFor="secondName">Second Name:
            <input type="text" placeholder='Second Name' id='secondName' required/></label>
            </div>
            <label htmlFor="email">Email:
            <input type="text" placeholder='Email' id='email' required/></label>
            <label htmlFor="message">How can we help you?
            <textarea name="message" id="message" placeholder='Say something.....' rows={5} cols={50}/></label>
            <button id='contact'>Contact Us</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
