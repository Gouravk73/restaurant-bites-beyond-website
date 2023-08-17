import React from 'react'
import img from'../../assets/Contact/ContactLogo.jpg'

import './ContactUs.scss'  
import ContactUsFormLocation from './ContactUsFormLocation'
const ContactUs = () => {
    
  return (
    <div className='contact' > 
        <div className='contact-logo' style={{backgroundImage:`url(${img})`}}>
            <div className='contact-logo-text'>
                Contact US
            </div>
        </div>
        
           <ContactUsFormLocation/>
 
    </div>
  )
}

export default ContactUs