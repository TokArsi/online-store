import styles from './FullItem.module.scss';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../../redux/slices/cartSlice';

const FullItem = () => {
  const location = useLocation();
  const data = useSelector((state) => state.data);

  const productId =
    location.pathname.split('/')[location.pathname.split('/').length - 1];

  const currentItem = data.find((i) => i.id == productId);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const onClickAdd = () => {
    if (!cartItems.find((i) => i.id == currentItem.id)) {
      dispatch(addItem(currentItem));
    } else {
      dispatch(removeItem(currentItem.id));
    }
  };

  return (
    <>
      {currentItem && (
        <div className={styles.root}>
          <div className={styles.leftSide}>
            <img src={currentItem.image} />
          </div>
          <div className={styles.rightSide}>
            <h1 className={styles.title}>{currentItem.title}</h1>
            <p className={styles.subtitle}>{currentItem.subtitle}</p>
            <p className={styles.price}>{currentItem.price}</p>
            <button
              onClick={(e) => {
                onClickAdd();
              }}
              className={`${styles.button} ${
                cartItems.find((i) => i.id == currentItem.id) && styles.added
              }`}
            >
              {!cartItems.find((i) => i.id == currentItem.id) ? (
                <p>В корзину</p>
              ) : (
                <p>В корзинe</p>
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FullItem;
