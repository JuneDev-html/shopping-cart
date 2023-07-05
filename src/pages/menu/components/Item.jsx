import React from 'react';

export const Item = ({ item, addToCart, group }) => {
  const [hovering, setHovering] = React.useState(false);

  const changeHoveringState = () => {
    setHovering(!hovering);
  };

  return (
    <div
      className='item-line'
      onMouseEnter={changeHoveringState}
      onMouseLeave={changeHoveringState}
      onClick={() => addToCart(item.name, group)}
    >
      <div className='item'>
        {hovering && <div className='addToCart'>+</div>}
        {item.name}
      </div>
      <div className='spacer'></div>
      <div className='pricing'>{item.pricing}</div>
    </div>
  );
};
