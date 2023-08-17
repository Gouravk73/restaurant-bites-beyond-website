import CroissantImg from'../../assets/shop/Croissant.webp'
import Chocolatechipscookies from'../../assets/shop/ChocolateChipCookies.jpg'
import Baguette from '../../assets/shop/Baguette.webp'
import BlueberryMuffin  from '../../assets/shop/BlueberryMuffin.jpg'
import Cupcake  from '../../assets/shop/Cupcake.jpg'

import ApplePie  from '../../assets/shop/ApplePie.jpg'
import FruitTart  from '../../assets/shop/FruitTart.jpg'
import LemonPoundCake  from '../../assets/shop/LemonPoundCake.jpg'
import Muffin  from '../../assets/shop/Muffin.jpg'
import Scone  from '../../assets/shop/Scone.jpg'

import Redvelvetcake  from '../../assets/shop/Redvelvetcake.jpg'
import choclatecake  from '../../assets/shop/choclatecake.jpg'
import BlackForestCake  from '../../assets/shop/BlackForestCake.webp'
import Palmier  from '../../assets/shop/Palmier.jpg'
import oreocake  from '../../assets/shop/oreocake.jpeg'

import Cheesecake  from '../../assets/shop/Cheesecake.jpg'
import StrawberryShortcake  from '../../assets/shop/StrawberryShortcake.jpg'
import cheesepizza  from '../../assets/shop/cheesepizza.jpg'
import pepperonipizza  from '../../assets/shop/pepperonipizza.jpg'
import veggieburger  from '../../assets/shop/veggieburger.jpg'

import chickenburger  from '../../assets/shop/chickenburger.jpg'
import Cheeseburger  from '../../assets/shop/Cheeseburger.jpg'
import MargheritaPizza  from '../../assets/shop/MargheritaPizza.jpg'
import frenchfries  from '../../assets/shop/frenchfries.jpg'
import LemonTart  from '../../assets/shop/LemonTart.jpg'

import RasmalaiCake  from '../../assets/shop/RasmalaiCake.webp'
import coconutladdoo  from '../../assets/shop/coconutladdoo.jpg'
import KesarPistaBiscuits  from '../../assets/shop/KesarPistaBiscuits.jpg'
import cherrydanish  from '../../assets/shop/cherrydanish.jpg'
import appleTurnover  from '../../assets/shop/appleTurnover.jpg'

const bakeryItems = [
    {
      id: 1,
      title: 'Croissant',
      alt: 'Croissant',
      img: CroissantImg,
      url:  'url',
      price: 2.50,
      quantity: 1,
    },
    {
      id: 2,
      title: 'Chocolate Chip Cookies',
      img: Chocolatechipscookies,
      url: '/chocolate-chip-cookies',
      price: 1.50,
      quantity: 1,
    },
    {
      id: 3,
      title: 'Baguette',
      img: Baguette,
      url: '/baguette',
      price: 3.00,
      quantity: 1,
    },
    {
      id: 4,
      title: 'Blueberry Muffin',
      img: BlueberryMuffin,
      url: '/blueberry-muffin',
      price: 2.00,
      quantity: 1,
    },
    {
      id: 5,
      title: 'Cupcake',
      img: Cupcake,
      url: '/cupcake',
      price: 2.00,
      quantity: 1,
    },
    {
      id: 6,
      title: 'Apple Pie',
      img: ApplePie,
      url: '/apple-pie',
      price: 3.50,
      quantity: 1,
    },
    {
      id: 7,
      title: 'Fruit Tart',
      img: FruitTart,
      url: '/fruit-tart',
      price: 3.20,
      quantity: 1,
    },
    {
      id: 8,
      title: 'Lemon Pound Cake',
      img: LemonPoundCake,
      url: '/lemon-pound-cake',
      price: 2.50,
    },
    {
      id: 9,
      title: 'Muffin',
      img: Muffin,
      url: '/muffin',
      price: 1.75,
      quantity: 1,
    },
    {
      id: 10,
      title: 'Scone',
      img: Scone,
      url: '/scone',
      price: 2.00,
      quantity: 1,
    },
    {
      id: 11,
      title: 'Red Velvet Cake',
      img: Redvelvetcake,
      url: '/cakes/red-velvet',
      price: 28.99,
      quantity: 1,
    },
    {
      id: 12,
      title: 'Chocolate Cake',
      img: choclatecake,
      url: '/cakes/chocolate',
      price: 25.99,
      quantity: 1,
    },
    {
      id: 13,
      title: 'Black Forest Cake',
      img: BlackForestCake,
      url: '/cakes/black-forest',
      price: 29.99,
      quantity: 1,
    },
    {
      id: 14,
      title: 'Palmier',
      img: Palmier,
      url: '/palmier',
      price: 2.25,
      quantity: 1,
    },
    {
      id: 15,
      title: 'Oreo Cake',
      img: oreocake,
      url: '/cakes/oreo',
      price: 31.50,
      quantity: 1,
    },
    {
      id: 16,
      title: 'Cheesecake',
      img: Cheesecake,
      url: '/cheesecake',
      price: 3.50,
      quantity: 1,
    },
    {
      id: 17,
      title: 'Strawberry Shortcake',
      img: StrawberryShortcake,
      url: '/strawberry-shortcake',
      price: 3.00,
      quantity: 1,
    },
    {
      id: 18,
      title: 'Cheese Pizza',
      img: cheesepizza,
      price: 9.99,
      quantity: 1,
    },
    {
      id: 19,
      title: 'Pepperoni Pizza',
      img: pepperonipizza,
      price: 10.99,
      quantity: 1,
    },
    {
      id: 20,
      title: 'Veggie Burger',
      img: veggieburger,
      price: 5.99,
      quantity: 1,
    },
    {
      id: 21,
      title: 'Chicken Burger',
      img: chickenburger,
      price: 6.99,
      quantity: 1,
    },
    {
      id: 22,
      title: 'Cheeseburger',
      img: Cheeseburger,
      price: 5.99,
      quantity: 1,
    },
    {
      id: 23,
      title: 'Margarita Pizza',
      img: MargheritaPizza,
      price: 11.49,
      quantity: 1,
    },
    {
      id: 24,
      title: 'French Fries',
      img: frenchfries,
      price: 3.49,
      quantity: 1,
    },
    {
      id: 25,
      title: 'Lemon Tart',
      img: LemonTart,
      url: '/lemon-tart',
      price: 3.20,
      quantity: 1,
    },
    {
      id: 26,
      title: 'Rasmalai Cake',
      img: RasmalaiCake,
      price: 3.99,
      quantity: 1,
    },
    {
      id: 27,
      title: 'Coconut Ladoo',
      img: coconutladdoo,
      price: 1.75,
      quantity: 1,
    },
    {
      id: 28,
      title: 'Kesar Pista Biscuits',
      img: KesarPistaBiscuits,
      price: 1.49,
      quantity: 1,
    },
    
    {
      id: 29,
      title: 'Cherry Danish',
      img: cherrydanish,
      url: '/cherry-danish',
      price: 2.25,
      quantity: 1,
    },
     
    {
      id: 30,
      title: 'Apple Turnover',
      img: appleTurnover,
      url: '/apple-turnover',
      price: 2.25,
      quantity: 1,
    },
  ];
  
  export default bakeryItems;
  