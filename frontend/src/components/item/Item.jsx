import styles from './Item.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../../redux/slices/cartSlice';

const Item = ({ data }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const onClickAdd = () => {
    if (!cartItems.find((i) => i.id == data.id)) {
      dispatch(addItem(data));
    } else {
      dispatch(removeItem(data.id));
    }
  };

  return (
    <Link to={'/product/' + data.id} className={styles.root}>
      <img className={styles.image} src={data.image} />
      <div className={styles.bottom}>
        <p className={styles.title}>{data.title}</p>
        <p className={styles.price}>{data.price}</p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            onClickAdd();
          }}
          className={`${styles.button} ${
            cartItems.find((i) => i.id == data.id) && styles.added
          }`}
        >
          {!cartItems.find((i) => i.id == data.id) ? (
            <p>В корзину</p>
          ) : (
            <p>В корзинe</p>
          )}
        </button>
      </div>
    </Link>
  );
};

export default Item;
