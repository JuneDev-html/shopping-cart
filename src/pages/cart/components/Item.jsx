import React from 'react';

export const Item = () => {
  const [itemCount, setItemCount] = React.useState(0);

  const incrementCount = () => {
    setItemCount(itemCount + 1);
  };

  console.log(itemCount);

  const decrementCount = () => {
    setItemCount(itemCount - 1);
  };

  return (
    <div className='items-wrap'>
      <img className='item-image' src='' alt='' />
      <div className='item-description'>
        <div className='item-info name'>espresso</div>
        <div className='item-info details'>single - italian</div>
        <div className='item-info quantity'>
          <div className='decrement' onClick={decrementCount}>
            -
          </div>
          <div className='current-quantity'>
            <div className='count'>{itemCount}</div>
          </div>
          <div className='increment' onClick={incrementCount}>
            +
          </div>
        </div>
      </div>
      <div className='item-total'>$8.52</div>
    </div>
  );
};
