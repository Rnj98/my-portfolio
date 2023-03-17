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
        <a href='https://github.com/rnj98' target="_blank">
          <button className='buttons'>GitHub</button>
        </a>
        <a href='https://www.linkedin.com/in/ryan-jolley-444a97243/' target="_blank">
          <button className='buttons'>Linkedin</button>
        </a>
      </div>
    </div>
  )
}
