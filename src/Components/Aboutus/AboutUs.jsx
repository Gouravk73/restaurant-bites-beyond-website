import React from 'react' 
import img from'../../assets/About/AboutImg.jpg'
import './ABoutUs.scss'
import AboutSpeciality from './AboutSpeciality'

const AboutUs = () => {

  return (
    <div className='about'>
      <div className='about-logo'  style={{backgroundImage:`url(${img})`}}>
            <div className='about-logo-text'>
                About US
            </div>
        </div>
        <div className="about-page1">
          <div className='about-page1-left'>
            <h1>ABOUT US</h1>
            <h2>We have Started Our Journey to serve you from 2002</h2>
          </div>
          <div className="about-page1-right">
            <p>For over <strong>Two decades,</strong>  we have embarked on a remarkable journey dedicated to serving our valued customers. Since our establishment in <strong>2002</strong>, our unwavering commitment to excellence has guided us every step of the way. Today, we stand proud as a leading provider in our industry, ready to meet your needs with unparalleled expertise and passion.

From our humble beginnings, we recognized the importance of building strong relationships with our customers. We understood that trust and loyalty were the pillars upon which successful businesses are built.</p>
          </div>
        </div>
        <div className="about-page2">
        <AboutSpeciality/>
        </div>
    </div>
  )
}

export default AboutUs