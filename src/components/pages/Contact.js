import React, { useState } from 'react';
import emailjs from 'emailjs-com'
import '../Contact.css'
import Footer from '../Footer';

const Result =() => {
    return(
        <p>Your message has been successfully sent. I will contact you soon.</p>
    )
}

export default function Contact(props) {

    const [result, setResult] = useState(false);

    const sendEmail = (e)  => {
        e.preventDefault();
    
        emailjs.sendForm('service_b1mbmao', 'template_h4ciq3f', e.target, 'user_32rjmVouwsKxkTriXOcDs')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          setResult(true);
    }

    // hide result
    setTimeout(() => {
        setResult(false);
    }, 5000);

    return (
        <>
            <div className="contact-container">
                <div className='content-left'>
                    <img src='images/img60.jpg' alt=''
                    className='form1-img'/>
                </div>
                <div className="content-right">
                    <form className='contact-form' onSubmit={sendEmail}>
                        <h2>Hello, Welcome to our service</h2>
                        <div className="form-inputs">
                            <div>
                                <label htmlFor='fullName'
                                className='form-label'>
                                    Full Name
                                </label>
                                <input type="text" className="form-input" placeholder="Full Name" name="fullName"/>
                            </div>
                            <div>
                                <label htmlFor='phone'
                                className='form-label'>
                                    Phone Number
                                </label>
                                <input type="text" className="form-input" placeholder="Phone Number" name="phone"/>
                            </div>
                            <div >
                                <label htmlFor='email'
                                className='form-label'>
                                    Email
                                </label>
                                <input type="email" className="form-input" placeholder="Email" name="email"/>
                            </div>
                            <div >
                                <label htmlFor='username'
                                className='form-label'>
                                    Message
                                </label>
                                <textarea className="form-input" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                            </div>
                            <div>
                                <input type="submit" className="form-input-btn" value="Send Message"></input>
                                <div className="row">{result ? <Result/> : null}</div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        <Footer/>
        </>
    )
    
}