import { Item } from './Item';

export const Block = ({ title, items }) => {
  const options = items.map((item, id) => <Item key={id} item={item} />);
  return (
    <div className='menu-block'>
      <div className='item-type'>{title}</div>
      {options}
    </div>
  );
};
