import closeBtn from '../../assets/close.svg';
import '../../styles/cart.scss';
import { Item } from './components/Item';

export const Cart = ({
  cart,
  toggleCart,
  incrementCount,
  decrementCount,
  clearCart,
}) => {
  const items = cart.map((item, id) => (
    <Item
      key={id}
      item={item}
      incrementCount={incrementCount}
      decrementCount={decrementCount}
    />
  ));

  const subtotal = cart.reduce((total, item) => {
    const itemTotal = item.info.pricing * item.quantity;
    return total + itemTotal;
  }, 0);

  const placeOrder = () => {
    alert('Thank you for shopping with us <3');
    clearCart();
    toggleCart();
  };

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
        {items}
        <div className='subtotal-wrap'>
          <p className='total-name'>Subtotal:</p>
          <p className='order-total'>${subtotal}</p>
        </div>
        <button className='button' onClick={placeOrder}>
          Place Order
        </button>
      </section>
    </div>
  );
};
