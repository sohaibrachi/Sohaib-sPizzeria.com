import React from 'react'
import pizzaLeft from "../assets/pizzaLeft.jpg"
import "../styles/Contact.css"

function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage: `url(${pizzaLeft })` }}>

      </div>
      <div className='rightSide'>
        <h1>Contact Us</h1>
        <form id="contact-form" method="Post">
        <label htmlFor='name'>Full Name</label>
          <input name='name' placeholder='Enter ur name...' type="text"/>
        <label htmlFor='email'>Email</label>
          <input name='email' placeholder='Enter ur email' type="email"/>
        <label htmlFor='message'>Message</label>    
          <textarea rows="6"
           placeholder="enter message.."
           name='message'
           required
           ></textarea>
           <button type='submit'>Sens Message</button>    
        </form>
        
      </div>
    </div>
  )
}
export default Contact