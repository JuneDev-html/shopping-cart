export const Item = ({ item }) => {
  return (
    <div className='item-block'>
      <div className='item'>{item.item}</div>
      <div className='spacer'></div>
      <div className='pricing'>
        {item.size
          ? `${item.size.single} / ${item.size.double} / ${item.size.triple}`
          : item.pricing}
      </div>
    </div>
  );
};
