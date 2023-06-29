import '../../styles/menu.scss';
import { menu } from '../../environment/menu';
import { Block } from './components/Block';

export const Menu = () => {
  return (
    <main className='menu'>
      <section className='menu-side'>
        <div className='menu-welcome'>Mirëseardhje</div>
        <div className='menu-title'>MENU</div>
        <Block title={'DRINKS'} items={menu.drinks} />
        <Block title={'FOOD'} items={menu.food} />
      </section>
      <section className='banner-side'>
        <div></div>
      </section>
    </main>
  );
};
