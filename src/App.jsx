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
      name: 'espresso',
      info: menu2.drinks[0],
      quantity: 1,
    },
    {
      name: 'pie',
      info: menu2.food[1],
      quantity: 2,
    },
  ]);

  const addToCart = (name, group) => {
    const found = cart.find((item) => item.name === name);

    if (found) {
      console.log('quantity incremented');
      incrementCount(name);
    } else {
      const newItem = menu2[group].find((item) => item.name === name);

      console.log('New item added');
      setCart((oldCart) => {
        return [
          ...oldCart,
          {
            name: name,
            info: newItem,
            quantity: 1,
          },
        ];
      });
    }
    toggleCart();
  };

  const incrementCount = (name) => {
    setCart((oldCart) =>
      oldCart.map((oldItem) => {
        return oldItem.name === name
          ? { ...oldItem, quantity: oldItem.quantity + 1 }
          : oldItem;
      })
    );
  };

  const decrementCount = (name) => {
    const clickedItem = cart.find((item) => item.name === name);
    if (clickedItem.quantity <= 1) {
      alert('remove item?');
    } else {
      console.log('quantity decremented');
      setCart((oldCart) =>
        oldCart.map((oldItem) => {
          return oldItem.name === name
            ? { ...oldItem, quantity: oldItem.quantity - 1 }
            : oldItem;
        })
      );
    }
  };

  const toggleCart = () => {
    setIsCartActive(!isCartActive);
  };

  const clearCart = () => {
    setCart([]);
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
          <Cart
            cart={cart}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
            toggleCart={toggleCart}
            clearCart={clearCart}
          />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/menu' element={<Menu addToCart={addToCart} />} />
        </Routes>
      </div>
      <footer>
        <p>&#60;June /&#62;</p>
        <a
          className='logos'
          href='https://github.com/JuneDev-html/shopping-cart'
        >
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
