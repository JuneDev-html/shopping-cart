import { Link } from 'react-router-dom';
import '../../styles/navbar.scss';
import bag from '../../assets/bag.svg';

export const Navbar = ({ toggleCart }) => {
  return (
    <nav className='navbar'>
      <div className='page-nav'>
        <Link className='nav-link' to='/'>
          HOME
        </Link>
        <Link className='nav-link' to='/menu'>
          MENU
        </Link>
        <Link className='nav-link' to='/about'>
          ABOUT
        </Link>
      </div>
      <div id='bag-wrap'>
        <img src={bag} width={20} alt='shopping bag' onClick={toggleCart} />
      </div>
    </nav>
  );
};
