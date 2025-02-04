import CartItem from '../cartItem';
import { useSelector } from 'react-redux';
import styles from './Cart.module.scss';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
      <div>
        {cartItems.length ? (
          <div>
            {cartItems.map((i) => (
              <CartItem data={i} key={i} />
            ))}
            <button className={styles.button}>Оформить заказ</button>
          </div>
        ) : (
          <p className={styles.empty}>Корзина пока пуста</p>
        )}
      </div>
    </>
  );
};

export default Cart;
