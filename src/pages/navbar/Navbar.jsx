import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link className='nav-link' to='/'>
        HOME
      </Link>
      <Link className='nav-link' to='/menu'>
        MENU
      </Link>
      <Link className='nav-link' to='/about'>
        ABOUT
      </Link>
      <Link className='nav-link' to='/cart'>
        CART
      </Link>
    </nav>
  );
};
