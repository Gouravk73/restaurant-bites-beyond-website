import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import Blog from './Components/Blogs/Blog';
import AboutUs from './Components/Aboutus/AboutUs';
import Footer from './Components/Footer/Footer';
import ContactUs from './Components/Contact/ContactUs';
import Shop from './Components/Shop/Shop';
import Cart from './Components/Shop/Cart';
import CartProvider from './Components/Store/CartProvider';
import Loader from './Components/Loader';
import Menu from './Components/Menu/Menu'

function App() {
  return (
    <CartProvider>
     <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/about" element={<AboutUs/>} />
      <Route path="/menu" element={<Menu/>} />
      <Route path="/contact" element={<ContactUs/> } />
      <Route path="/shop" element={<Shop/> } />
      <Route path="/cart" element={<Cart/> } />
      <Route path="/loader" element={<Loader/> } />
      </Routes>
      <Footer/>
     </Router>
     </CartProvider>
  );
}

export default App;
