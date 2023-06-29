import closeBtn from '../../assets/close.svg';
import '../../styles/cart.scss';
import { Item } from './components/Item';

export const Cart = ({ toggleCart }) => {
  return (
    <div>
      <header>
        <img
          width={25}
          src={closeBtn}
          alt='close button'
          onClick={toggleCart}
        />
      </header>
      <section className='cart-body'>
        <div className='cart-title-wrap'>
          <h1 className='bag-title'>Your</h1>
          <h1 className='bag-title'>Shopping</h1>
          <h1 className='bag-title'>Bag</h1>
        </div>
        <Item />
        <div className='order-total'></div>
        <div className='checkout-wrap'></div>
      </section>
    </div>
  );
};
