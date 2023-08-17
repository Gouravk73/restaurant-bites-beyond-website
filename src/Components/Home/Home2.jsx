import React, { useState } from 'react'
import { Toaster,toast } from 'react-hot-toast';

import { MdCheckCircle } from 'react-icons/md';
const Home2 = () => {
  const[name,setName]=useState('');
  const[person,setPerson]=useState('');
  const[email,setEmail]=useState('');
  const[phoneNumber,setPhoneNumber]=useState('');
  const[time,setTime]=useState('');
  const[date,setDate]=useState('');

  const handleFormSubmit=(e)=>{
    e.preventDefault();
    const successMessage = (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <MdCheckCircle size={'2rem'} style={{ marginRight: '8px', color: 'green' }} />
        <div>
          <p style={{ margin: 0 }}>Reservation successful!</p>
          <p style={{ margin: 0, fontSize: '12px', color: 'gray' }}>
            Thank you for booking a table.
          </p>
        </div>
      </div>
    );
    toast(successMessage, {
       duration: 1000, // Time in milliseconds for how long the toast will be displayed (2 seconds in this example)
    });
     setName('');
     setPerson('');
     setEmail('');
     setPhoneNumber('');
     setTime('');
     setDate('');
  }
  return (
    <div className='home2' id='home2'>
        <div className='textClass'>
        <h1>Reserve Your Table</h1>
        <p>Book a table in advance to enjoy your time with friends & Family</p>

        </div>
        <div className="main-form">
          <form action="" onSubmit={handleFormSubmit}>
            <div>
              <span>Your Name</span>
              <input type="text" name="name" id="name" placeholder="John Doe" value={name} onChange={(e)=>setName(e.target.value)} required/>
            </div>

            <div>
              <span>No. of Person</span>
              <input type="number" name="person" id="person" placeholder="4" required value={person} onChange={(e)=>setPerson(e.target.value)}/>
            </div>

            <div>
              <span>Email</span>
              <input type="email" name="phone" id="phone"   placeholder="john@doe.com" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>

            <div>
              <span>Phone Number  </span>
              <input type="tel" name="phone" id="phone" placeholder="1234-567-890" required value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
            </div>


            <div>
              <span>Time </span>
              <input type="time" name="time" id="time"  required value={time} onChange={(e)=>setTime(e.target.value)} />
            </div>

            <div>
              <span>Date </span>
              <input type="date" name="date" id="date" placeholder="date" required value={date} onChange={(e)=>setDate(e.target.value)}/>
            </div>

            
            <div id="submit">
              <button>RESERVE A TABLE</button> 
            </div>
            <Toaster   />
          </form>

    </div></div>
  )
}

export default Home2