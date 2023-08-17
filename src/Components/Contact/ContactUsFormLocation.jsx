import React from 'react'
import { Link } from 'react-router-dom'
import './ContactUsFormLocation.scss'  

const ContactUsFormLocation = () => {
  return (
      <div className='contact-page' >
    <div className='contact-page1'>
                <h1>Get in Touch:</h1>
                <p>Are you a food lover? If your answer is yes, then in restaurant for you. We serve foods for reasonable prices.It's awesome, we know.</p>
                <input type="text" placeholder='Your Full Name' /> <br />
                <input type="text" placeholder='Your Email Address' />  <br />
                <input type="text" placeholder='Your Phone Number' />  <br />
                <input type="text" placeholder='Message Here' />  <br />
                <Link   to="/">Send Now</Link>
            </div>
            <div className='contact-page2'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56567.77567123101!2d75.10152112292802!3d27.6094615915554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396ca4b82334472b%3A0x7f485cce3a6bf355!2sSikar%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1690420150058!5m2!1sen!2sin"
                width="100%"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title='restroLoaction'
      ></iframe>
            </div>
            </div>
  )
}

export default ContactUsFormLocation