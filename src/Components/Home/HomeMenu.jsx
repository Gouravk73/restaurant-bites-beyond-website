import React,{useState} from 'react'
import './HomeMenu.scss'; // Import the SCSS file
import mainCourseImg from "../../assets/Menu/maincourse.png";
import DessertsImg from "../../assets/Menu/Desserts.png";
import drinkImg from "../../assets/Menu/Drinks.png";
import snacksImg from "../../assets/Menu/snacks.png";
import { MainCourse } from '../Menu/menuData/mainCourse';
import {snacks} from"../Menu/menuData/Snacks";
import {desserts} from"../Menu/menuData/desserts";
import{drinks} from "../Menu/menuData/drinks";
import img2 from "../../assets/background.jpg";


const HomeMenu = () => {
     
     const[toggled,setToggled]=useState(1);
      function activeTab(val){
        setToggled(val);
     }
     const data= toggled===1?MainCourse:toggled===2?snacks:toggled===3?desserts:toggled===4? drinks:null;
     const menuName= toggled===1?"MainCourse":toggled===2?"snacks":toggled===3?"desserts":toggled===4? "drinks":null;
    return (
        <>
        <div className="homeMenu" id='homeMenu'>
            <div className='homeMenu-heading'>
            <h1>Restaurant Menu</h1>
            <p>Find your favourite meal from the delicious options we have</p>

            </div>
            <div className="homeMenu-icons" id='homeMenu-icons'>
                <div className='icon'>
                    <div  >
                        <img onClick={()=>activeTab(1)} src={mainCourseImg} alt="MainCourse" className={toggled===1?'active':''}   />
                        <p>Main Course</p>

                    </div>

                    <div>
                        <img onClick={()=>activeTab(2)} src={snacksImg} alt="Snacks" className={toggled===2?'active':''}/>
                        <p >Snacks</p>

                    </div>
                    <div>
                        <img onClick={()=>activeTab(3)} src={DessertsImg} alt="Desserts"   className={toggled===3?'active':''}/>
                        <p>Desserts</p>
                    </div>
                    
                    <div>
                    <img onClick={()=>activeTab(4)} src={drinkImg} alt="Drinks"   className={toggled===4?'active':''}/>
                    <p>Drinks</p>
                    </div>
                    
                    
                </div> 
                
                
            </div> 
            <div className='homeMenu-data' style={{backgroundImage:`url(${img2})`}}>
    
                <h1>MENU CARD 
                    <span style={{fontSize:'1.3rem' ,fontWeight:'lighter',color:'#bab2af'}}> ( {menuName} )</span>
                </h1>
                
                <div className='homeMenu-items'>
                    {
                        data.map((item)=>{
                            return <div key={item.id} className='homeMenu-item'>
                            <div className='menu-header'>
                                <h3 className='menu-item-title'>{item.title}</h3>
                                <span className='menu-item-price'>${item.price}</span>
                            </div>
                            <div style={{width:'70%'}}>
                                <p  className='menu-item-description'>{item.description}</p>
                            </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default HomeMenu