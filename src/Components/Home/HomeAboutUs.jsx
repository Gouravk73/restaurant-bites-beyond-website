import React from 'react'
import './HomeAboutUs.scss'; // Import the SCSS file
import img2 from "../../assets/background.jpg";
import img1 from "../../assets/chef.jpg";
import { Link } from 'react-router-dom';


const HomeAboutUs = () => {
  return (
    <div className='home3'>
        <div className='about_text'>
            <h1>About US</h1>
            <p>BITE&BEYOND cooks food as a culnery Art</p>
            <p>Culinary artists often take inspiration from various cuisines, cultural traditions, and personal experiences to create their own signature dishes.</p>
            <Link to={'/about'}><button >Learn More</button></Link>
        </div>
        <div className='about_img'>
            <img src={img1} alt="img" />
        </div>
        <div className='about_timing' style={{ backgroundImage: `url(${img2})`}}>
            <h1>OPENING HOURS</h1>
            <p>Sun  ____________ 11:00  -2:00  </p>
            <p>Mon  ____________ 8:00 -23:00 </p>
            <p>Tue ____________ 8:00 -23:00 </p>
            <p>Wed ____________ 8:00 -23:00 </p>
            <p>Thur _____________ 8:00 -23:00 </p>
            <p>Fri   ________________ Closed</p>
            <p>Sat ____________ 11:00 -2:00 </p>

        </div>
    </div>
  )
}

export default HomeAboutUs