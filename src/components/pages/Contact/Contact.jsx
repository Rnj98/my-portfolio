import React from "react";
import "./Contact.css";
import github from "../../assets/github-mark.png"
import linkedin from "../../assets/linkedin.png"
import { useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nqjv8zr', 'template_86kf1lj', form.current, 'ekm6Z0DdZYnP8Odbe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
    <div className="mainContact">
      <div className="divGreeter">
        <p className="contact-p">
          I would love to hear from you! If you have any questions, or would
          like a copy of my resume, please send me a message here!
        </p>
        <input type="text" placeholder="Name" name="user_name"/>
        <input type="text" placeholder="Email" name="user_email"/>
        <textarea placeholder="Message" name="message"/>
        <input type="submit" value="Send" className="send-button"/>
      </div>
      <div className="contactForm">
        <p className="p-links">You can also find me on:</p>
      <div className="links">
        <a href="https://github.com/rnj98" target="_blank" rel="noreferrer">
          <img src={github} className="link"alt="github_logo"/>
        </a>
        <a
          href="https://www.linkedin.com/in/ryan-jolley-444a97243/"
          target="_blank" rel="noreferrer">
          <img src={linkedin} className="link"alt="linkedin_logo"/>
        </a>
      </div>
      </div>
    </div>
    </form>
  );
}
