import React from 'react'
import "./Contact.css"


export default function Contact() {
  return (
    <div className='mainContact'>
      <div className='divGreeter'>I would love to hear from you!
      <br>
      </br>
      If you have any questions, or would like a copy of my resume, please send me a message here!</div>
      <br></br>
      <div className='contactForm'>
        <input type='text' placeholder='Name' />
        <input type='text' placeholder='Email' />
        <textarea placeholder='Message' />

      </div>
    </div>
  )
}
