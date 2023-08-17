import React, { useContext } from 'react'
import CartContext from '../Store/CartContext'
import './Cart.scss';
import { Link } from 'react-router-dom';
 import { Toaster, toast,useToaster  } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import {AiFillCheckCircle} from 'react-icons/ai'

const Cart = () => {
  const cartCntxt =useContext(CartContext);
  const toaster=useToaster();
  let totalPrice=0;

  cartCntxt.items.forEach((item)=>{
    totalPrice=totalPrice+Number(Math.round(20 * item.price) )*Number(item.quantity)
  })

  const curCartItems={};
    cartCntxt.items.forEach(item=>{
    const curTitle=item.title;
    const curPrice=Number(Math.round(20 * item.price));
    const curQuantity=Number(item.quantity);

    if(curCartItems[curTitle]) 
      {
        curCartItems[curTitle].quantity = curQuantity;
   }
    else {
      curCartItems[curTitle]={...item, quantity :curQuantity , price : curPrice};
    }
  
  }) 
  const cartItemsArray = Object.values(curCartItems);
  if(cartItemsArray.length === 0) {
    return<div className='cart-empty' > 
    <h1  >Your Cart is Empty	</h1>
    <h1  > <Link to={'/shop'}>⏪ </Link>Go Back to Shop	</h1>
    </div>;
  }



  const refreshPage = () => {

    toast.success( 
      <div>
       <div><h1>Thank You, Purchasing Done</h1></div> <br /> 
       <div>Go to cart for more purchase</div>

    </div>,
    {
      style: {
        background: '#4caf50',
        color: '#fff',
      }, 
    }
    );
    setTimeout(function(){
      cartCntxt.deleteAllItems();

    },1000)

  } 
  return (
    <div className='cart'>
      <h1 style={{ justifyContent:'center',textAlign:'center',color:'white'}}>Your Cart ({cartItemsArray.length} items)</h1>
      <div className="cart-items">
        <div    className="cart-table">
          <p>Item</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>total</p>
        </div>
        {
          cartItemsArray.map((item)=>{ 
            const {img,title,quantity,price}=item;
          return(
            <div className='cart-row' key={item.id}>
              <div className="cart-desc">
                <img src={img} alt={title} loading= "lazy" />
                <p>{title}</p>
              </div>
              
               <p><span>Price: </span>₹{price}</p>

               <div className="cart-quantity">
                <p><span>Quantity: </span>{quantity}</p>
                <div className="cart-row-btn">
                <button onClick={() => cartCntxt.removeQuantityHandler(item.id)}>-</button>
                <button style={{ backgroundColor: 'red' }} onClick={() => cartCntxt.addQuantityHandler(item)}>+</button> 
                </div>
 
               </div>
              <p><span>Sub-Total: </span>₹{price*quantity}</p>
            </div>
          );
          })}
      </div>
      <div className="cart-checkout">
         
          <h1>SubTotal: {totalPrice}.00</h1>
          <h1>Tax :₹{Math.round(totalPrice/7)}.00</h1>
          <h1>Delivery Charge ₹0.00</h1>
          <h1>Total Amount To pay : ₹{totalPrice+Math.round(totalPrice/7)}.00</h1>
          <div className="cartbtn">
          <button onClick={refreshPage}>CHECKOUT</button>
          <Toaster />

          </div>
       
      </div>
    </div>
  )
}

export default Cart