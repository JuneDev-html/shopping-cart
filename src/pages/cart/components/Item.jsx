import React from 'react';

export const Item = ({ item, incrementCount, decrementCount }) => {
  const subtotal = Number.parseFloat(item.info.pricing * item.quantity).toFixed(
    2
  );

  console.log(subtotal);
  return (
    <div className='items-wrap'>
      <img
        className='item-image'
        src={`/src/assets/${item.name}.png`}
        alt={item.name}
      />
      <div className='item-description'>
        <div className='item-info name'>{item.name}</div>
        <div className='item-info details'>{item.info.description}</div>
        <div className='item-info quantity'>
          <div className='decrement' onClick={() => decrementCount(item.name)}>
            -
          </div>
          <div className='current-quantity'>
            <div className='count'>{item.quantity}</div>
          </div>
          <div className='increment' onClick={() => incrementCount(item.name)}>
            +
          </div>
        </div>
      </div>
      <div className='item-total'>${subtotal}</div>
    </div>
  );
};
