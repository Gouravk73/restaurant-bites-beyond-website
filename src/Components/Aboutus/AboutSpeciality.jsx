import React from 'react'
import imgChef from'../../assets/OurSpeciality/chef.png';
import imgCuisines from'../../assets/OurSpeciality/Cuisines.png';
import imgDinner from'../../assets/OurSpeciality/dinnerTable.png';
import imgTakeout from'../../assets/OurSpeciality/takeout.png';


import './AboutSpeciality.scss'

const AboutSpeciality = () => {
  return (
    <>
     
    <div className='HomeSpecialtyImg'>
        
      <div className='image-box'>
        <img src={imgChef} alt='Chef' />
        <h1>Finest Chef</h1>
        <p>Look no further than the Finest Chef, where culinary excellence meets unparalleled passion.</p>
      </div>

      <div className='image-box'>
        <img src={imgCuisines} alt='Cuisines' />
        <h1>Famous Cousine</h1>
        <p>Immerse yourself in an atmosphere that is both inviting and elegant and luxurious.</p>

        </div>

      <div className='image-box'>
        <img src={imgDinner} alt='Dinner Table' />
        <h1>Beautiful Ambience</h1>
        <p>Prepare to be transported to a realm of elegance, tranquility, and sensory delight.</p>
        </div>
      
      <div className='image-box'>
        <img src={imgTakeout} alt='Takeout' />
        <h1>Safe Food Takeout</h1>
        <p>Our commitment to food safety starts from the moment your order is placed.</p>
        </div>
    </div>
    <span></span>
 </>
  )
}

export default AboutSpeciality