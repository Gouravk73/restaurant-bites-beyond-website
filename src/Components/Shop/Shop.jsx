import React, { useContext, useState } from 'react';
import img from '../../assets/shop/Croissant.webp';
import ShopList from './ShopList';
import './Shop.scss';
import CartContext from '../Store/CartContext';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [items, setItems] = useState(ShopList); 
  const[curPage,setCurPage]=useState(1);
  const cartCntxt=useContext(CartContext);

  const handlePagination=(pageNumber) => {
    setCurPage(pageNumber);
  }
  const addItemToCart=(item)=>{
    cartCntxt.addItem(item);
  }

  const itemPerPage=6;
  const indLastItem=curPage*itemPerPage;
  const indFirstItem=curPage*itemPerPage -itemPerPage;
  const curItem=(items.slice(indFirstItem,indLastItem));
  const totalPages = Math.ceil(items.length / itemPerPage);
 
  return (
    <div className='shop'>
      <h1>Shop</h1>
      <Link to={'/cart'}><button style={{fontSize:'1.2rem' ,fontWeight:'500'}}>Go To Cart</button></Link>
      <div className='shop-container'>
        {curItem.map((item) => (
          <div className='shop-box' key={item.id}>
            <div className='shop-img'>
            <LoadingImage src={item.img} alt={item.title} />

              
            </div> 
            <button onClick={()=>addItemToCart(item)}>Add To cart</button>
            <h2>{item.title}</h2>
            <p>₹ {Math.round(20 * item.price)}.00</p>
          </div>
          
        ))}
      </div>
      <div className="pagination">
        {
          Array.from({ length: totalPages }, (_, index) => (
            <span
              key={index}
              className={curPage === index + 1 ? 'active' : ''}
              onClick={() => handlePagination(index + 1)}
            >
              {index + 1}
            </span>
          ))
        }
      </div>
    </div>
  );
};
const LoadingImage = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className='loading-image-container'>
      {isLoading && <div style={{display:'flex',justifyContent:'center',alignItems:'center', textAlign:'center',backgroundColor:'grey',width:'200px',height: "200px",borderRadius: '100%'}} className='loading-animation'>Loading...</div>}
      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        style={{ display: isLoading ? 'none' : 'block' }}
      />
    </div>
  );
};

export default Shop;
