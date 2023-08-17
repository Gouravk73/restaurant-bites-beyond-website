// Home.js

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from "../../assets/homehotel2.jpg";
import img2 from "../../assets/homehotel1.jpg";
import img3 from "../../assets/homechef.jpg";


import './Home.scss'; // Import the SCSS file
import Home2 from './Home2';
import HomeAboutUs from './HomeAboutUs';
import HomeMenu from './HomeMenu';
import ContactUsFormLocation from '../Contact/ContactUsFormLocation'

const Home = () => {
  return (
    <>     <div className="home" id="home">
      <Carousel
        infiniteLoop
         showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={1000}
        autoPlay={true}
      >
        <div>
          <img src={img1} alt="img1" />
        </div>
        <div>
          <img src={img2} alt="img2"   />
        </div>
        <div>
          <img src={img3} alt="img3" />
        </div>
      </Carousel>
    </div>
     <Home2/>
     <HomeAboutUs/>
     <HomeMenu/> 
     <ContactUsFormLocation/>


    </>

  );
};

export default Home;
