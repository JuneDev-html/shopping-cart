import { Item } from './Item';

export const Block = ({ title, items, addToCart }) => {
  const options = items.map((item, id) => (
    <Item
      key={id}
      addToCart={addToCart}
      group={title.toLowerCase()}
      item={item}
    />
  ));
  return (
    <div className='menu-block'>
      <div className='item-type'>{title}</div>
      {options}
    </div>
  );
};
