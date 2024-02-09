import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const userId = process.env.REACT_APP_EMAILJS_USER_ID;

  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: userId,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setShowPopup(true)
          e.target.reset();
          setTimeout(() => {
              setShowPopup(false); 
          }, 9000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    };

    return (
        <section id="Contact" className="contact-section">
            <div>
                <p className="sub-title">Get in Touch</p>
                <h2>Contact Me</h2>
            </div>
            <form ref={form} onSubmit={sendEmail} className="contact-form-container">
                <div className="container">
                    <label htmlFor="first-name" className="contact-label">
                        <span className="text-md">First Name</span>
                        <input type="text" className="contact-input text-md" name="first" id="first-name" required/>
                    </label>
                    <label htmlFor="last-name" className="contact-label">
                        <span className="text-md">Last Name</span>
                        <input type="text" className="contact-input text-md" name="last" id="last-name" required/>
                    </label>
                    <label htmlFor="email" className="contact-label">
                        <span className="text-md">Email</span>
                        <input type="email" className="contact-input text-md" name="email" id="email" required/>
                    </label>
                    <label htmlFor="phone number" className="contact-label">
                        <span className="text-md">Phone Number</span>
                        <input type="number" className="contact-input text-md" name="phone" id="phone-number" />
                    </label>
                </div>
                <label htmlFor="message" className="contact-label">
                    <span className="text-md">Message</span>
                    <textarea className="contact-input text-md" name="message" id="message" rows="8" placeholder="Type your message..."/>
                </label>
                <div>
                    <input type="submit" value="Submit" className="btn btn-primary contact-from-btn"/>
                </div>
            </form>
            {showPopup && <Popup message="Thank you for your submission! I'll get back to you as soon as possible." />}
        </section>
    );
}

function Popup({ message }) {
    return (
      <div className="popup">
        <p>{message}</p>
      </div>
    );
  }