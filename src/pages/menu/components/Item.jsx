export const Item = ({ item }) => {
  return (
    <div className='item-block'>
      <div className='item'>{item.name}</div>
      <div className='spacer'></div>
      <div className='pricing'>{item.pricing}</div>
    </div>
  );
};
