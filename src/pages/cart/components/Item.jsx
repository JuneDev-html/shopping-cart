import React from 'react';
import espresso from '/src/assets/espresso.png';
import macchiato from '/src/assets/macchiato.png';
import latte from '/src/assets/latte.png';
import croissant from '/src/assets/croissant.png';
import pie from '/src/assets/pie.png';
import sandwich from '/src/assets/sandwich.png';

export const Item = ({ item, incrementCount, decrementCount }) => {
  const subtotal = Number.parseFloat(item.info.pricing * item.quantity).toFixed(
    2
  );
  const images = {
    espresso,
    macchiato,
    latte,
    croissant,
    pie,
    sandwich,
  };

  return (
    <div className='item-wrap'>
      <img className='item-image' src={images[item.name]} alt={item.name} />
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
