import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { About } from './pages/about/About';
import { Menu } from './pages/manu/menu';
import { Cart } from './pages/cart/Cart';
import { Home } from './pages/home/Home';
import { Navbar } from './pages/navbar/Navbar';
import logo from './assets/logo.png';
import youtube from './assets/youtube.svg';
import tiktok from './assets/tiktok.svg';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className='pages'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/cart' element={<Cart />} />
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
