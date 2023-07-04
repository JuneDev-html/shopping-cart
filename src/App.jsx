import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { About } from './pages/about/About';
import { Menu } from './pages/menu/menu';
import { Cart } from './pages/cart/Cart';
import { Home } from './pages/home/Home';
import { Navbar } from './pages/navbar/Navbar';
import logo from './assets/logo.png';
import youtube from './assets/youtube.svg';
import tiktok from './assets/tiktok.svg';
import { menu } from './environment/menu';

function App() {
  const [menu2, setMenu] = React.useState(menu);
  const [isCartActive, setIsCartActive] = React.useState(true);
  const [cart, setCart] = React.useState([
    {
      item: menu2.drinks[2],
      quantity: 1,
    },
    {
      item: menu2.food[1],
      quantity: 2,
    },
  ]);

  const toggleCart = () => {
    setIsCartActive(!isCartActive);
  };

  return (
    <div className='app'>
      <Navbar toggleCart={toggleCart} />
      <div
        className={isCartActive ? 'overlay active' : 'overlay'}
        onClick={toggleCart}
      ></div>
      <div className='pages'>
        <div className={isCartActive ? 'cart-overlay active' : 'cart-overlay'}>
          <Cart cart={cart} toggleCart={toggleCart} />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/menu' element={<Menu />} />
        </Routes>
      </div>
      <footer>
        <p>&#60;June /&#62;</p>
        <a className='logos' href='https://github.com/JuneDev-html'>
          <img className='logo' width={18} src={logo} />
        </a>
        <a
          className='logos'
          href='https://www.youtube.com/channel/UC8ryMqGJPToOXdwj4IqwE-Q'
        >
          <img className='logo' width={20} src={youtube} />
        </a>
        <a className='logos' href='https://www.tiktok.com/@june.dasilva'>
          <img className='logo' width={18} src={tiktok} />
        </a>
      </footer>
    </div>
  );
}

export default App;
