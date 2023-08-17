import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { CgMenu,CgCloseR } from 'react-icons/cg';
import img1 from"../../assets/logo .png"
import CartContext from '../Store/CartContext'
import "./Header.scss"

const Header = () => {
  const [closeIcon,setCloseIcon] =useState(false);
  const [openIcon,setOpenIcon]=useState(true);
  const [deviceSize, changeDeviceSize] = useState(window.innerWidth);
  const cartCtx=useContext(CartContext);
 
  const toggleMenu=()=>{
    setCloseIcon(!closeIcon);
    setOpenIcon(!openIcon);

  }

  const handleNavLinkClick = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    const resizeW = () => changeDeviceSize(document.documentElement.clientWidth);
    window.addEventListener("resize", resizeW);

    return () => window.removeEventListener("resize", resizeW);
  },[]);

  return (
    
    <header className="header"  >
      <nav >
        <div className='mobilelogo'>
        <Link to="/">
              <img src={img1} alt="" />
              </Link>
              
        </div>



        {deviceSize>831?(
          <ul className= "nav-links" >
            <li>
              <Link onClick={handleNavLinkClick} to="/">Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={handleNavLinkClick}>About</Link>
            </li>
            <li>
              <Link onClick={handleNavLinkClick} to="/menu">Menu</Link>
            </li>
            <li>
              <Link onClick={handleNavLinkClick} to="/">
              <img src={img1} alt="" />
              </Link>
              </li>
            <li>
              <Link onClick={handleNavLinkClick} to="/shop">Shop</Link>
            </li>
            <li>
              <Link onClick={handleNavLinkClick} to="/blog">Blog</Link>
            </li> 
            <li>
              <Link onClick={handleNavLinkClick} to="/contact">Contact</Link>
            </li> 
            <li className='cart-icon' >
              <Link onClick={handleNavLinkClick}  to="/cart"><FaShoppingCart/><span className="cart-item-count"> {cartCtx.items.length}</span></Link>
            </li>
          </ul>
        
        ):(
          <ul className= {closeIcon?"nav-links-mobile":"nav-links-mobile-close"} >
           <li className='mobile-nav-image'>
              <Link  onClick={() => { handleNavLinkClick(); toggleMenu(); }} to="/">
              <img src={img1} alt="" />
              </Link>
            </li>
            <li>
              <Link onClick={() => { handleNavLinkClick(); toggleMenu(); }} to="/">Home</Link>
            </li>
            <li>
              <Link onClick={() => { handleNavLinkClick(); toggleMenu(); }} to="/about">About</Link>
            </li>
            <li>
              <Link onClick={() => { handleNavLinkClick(); toggleMenu(); }} to="/menu">Menu</Link>
            </li>
            <li>
              <Link onClick={() => { handleNavLinkClick(); toggleMenu(); }} to="/shop">Shop</Link>
            </li>
            <li>
              <Link onClick={() => { handleNavLinkClick(); toggleMenu(); }} to="/blog">Blog</Link>
            </li>
            <li>
              <Link onClick={() => { handleNavLinkClick(); toggleMenu(); }} to="/contact">Contact</Link>
            </li><li>
              <Link onClick={() => { handleNavLinkClick(); toggleMenu(); }} to="/cart">Cart</Link>
            </li>
          </ul>
        )}
        
         
        <div className="open-close-icon" onClick={toggleMenu}>
           
             
           {openIcon&&<CgMenu />}
           {closeIcon&&<CgCloseR />}
        </div> 
      </nav>
      {/* {console.log(deviceSize)} */}
    </header>
  )
}

export default Header