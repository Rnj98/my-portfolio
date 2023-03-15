import React from 'react'
import "./Contact.css"


export default function Contact() {
  return (
    <div className='mainContact'>
      <div className='divGreeter'>
        <p>
        I would love to hear from you!
        If you have any questions, or would like a copy of my resume, please send me a message here!
        </p>
        </div>
        <div className='contactForm'>
        <input type='text' placeholder='Name' />
        <input type='text' placeholder='Email' />
        <textarea placeholder='Message' />
        <button className='buttons'>Send Message</button>
        <button className='buttons'>Clear Form</button>
        <a href='https://github.com/rnj98' target="_blank">
          <button className='buttons'>Go to my GitHub profile</button>
        </a>
      </div>
    </div>
  )
}
