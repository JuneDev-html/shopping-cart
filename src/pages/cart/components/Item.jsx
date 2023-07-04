import React from 'react';

export const Item = ({ item }) => {
  const [itemCount, setItemCount] = React.useState(item.quantity);

  const incrementCount = () => {
    setItemCount(itemCount + 1);
  };

  const decrementCount = () => {
    setItemCount(itemCount - 1);
  };

  return (
    <div className='items-wrap'>
      <img
        className='item-image'
        src={`/public/${item.item.name}.png`}
        alt=''
      />
      <div className='item-description'>
        <div className='item-info name'>{item.item.name}</div>
        <div className='item-info details'>{item.item.description}</div>
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
      <div className='item-total'>
        ${Number.parseFloat(`${item.item.pricing}` * itemCount).toFixed(2)}
      </div>
    </div>
  );
};
