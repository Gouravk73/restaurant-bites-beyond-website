import React from 'react'
 
const CartContext=React.createContext({
  items:[],
  addItem:(item)=>{},
  removeItem:(id)=>{},
  addQuantityHandler:(item)=>{},
  removeQuantityHandler :(item)=>{},
  deleteAllItems:()=>{},
})

export default CartContext;