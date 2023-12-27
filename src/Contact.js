
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Style.css';

 const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3imlxfl', 'template_1k9ty07', form.current, '61vLsBS_dshSwVoCd')
      .then((result) => {
          console.log(result.text);
          console.log("message send");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id= "contact">
    <div className="contact-section">
    <img src='2.png'alt='side' />
    <div className='container'>
      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
        <h1>Contact Form</h1>
          <input type="text" name="user_name"  placeholder='Enter your name...'/>
          <input type="email" name="user_email" placeholder='Enter your email...'/>
          <textarea name="message" placeholder='Enter your message...' />
          <input type="submit" value="Send Message" className='send-btn' />
        </form>
      </div>
      {[...Array(51)].map((_, index) => <span key={index} style={{ "--i": index }}></span>)}
      </div>
    </div>
    </section>
  );
}

export default Contact;
