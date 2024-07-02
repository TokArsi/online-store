import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className={styles.root}>
      <Link
        to={'/'}
        className={styles.headerLeft}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <h1 className={styles.title}>Elhanchik.shop</h1>
        <p className={styles.subtitle}> - товары из США</p>
        <img
          width={'50px'}
          style={{ marginLeft: '15px' }}
          src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
        ></img>
      </Link>
      <div className={styles.headerRight}>
        <Link to={'/cart'}>
          <button className={styles.cart}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <p>Корзина</p>
            {cartItems.length !== 0 && (
              <span style={{ marginLeft: '5px', marginRight: '5px' }}>
                {cartItems.length}
              </span>
            )}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
