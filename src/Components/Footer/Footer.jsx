import React from 'react'
import logo from'../../assets/logo .png'
import {GrFacebook,GrInstagram,GrYoutube} from 'react-icons/gr'

import './Footer.scss'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footerone' >
        <div className='footer1'>
            <h4>OUR ADDRESS</h4>
            <p > 123 ,karol Bagh , delhi, INDIA</p>

            <h4 >PHONE NUMBER</h4>
            <p  >+91 737 XXXX 937</p>

            <h4>EMAIL ADDRESS</h4>
            <p  ></p>

            <h4>EMAIL ADDRESS</h4>
            <p  >beyondand@gmail.com </p>

            <h4>FOLLOW ME</h4>
            <div className='followicons'>
              <Link to={'https:/facebook.com'} target='_blank'><GrFacebook size={'30px'} style={{ color: '#4267B2' }}/></Link>
              <Link to={'https:/instagram.com'} target='_blank'><GrInstagram size={'2rem'}style={{ color: '#bbb3b3' }}/></Link>
              <Link to={'https:/youtube.com'} target='_blank'><GrYoutube size={'2rem'} style={{ color: '#CD201F' }}/></Link>
            </div>

       </div>
       <div className='footer2'>
            <img src={logo} alt="logo" />
        </div>
        <div className='footer3'>
            <h2> WORKING HOURS</h2>
            <p style={{marginTop:'5px'}}>Monday - thursday  11:00 -2:00</p>            
            <p  >Saturday	11:00 - 02:00</p>
            <p  >Sunday	11:00 - 2:00 </p>
            <p  >Friday Closed </p>
        </div>
    </div>
    <div className='footer-reserved'>
    <h3>© All rights reserved to Gourav</h3></div>
    </div>
  )
}

export default Footer;