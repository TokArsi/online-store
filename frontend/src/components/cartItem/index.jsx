import styles from './CartItem.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../redux/slices/cartSlice';

const CartItem = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.root}>
      <Link to={'/product/' + data.id} className={styles.root}>
        <img className={styles.image} src={data.image} />
        <p className={styles.title}>{data.title}</p>
        <p className={styles.price}>{data.price}</p>
        <button
          onClick={(e) => {
            dispatch(removeItem(data.id));
            e.stopPropagation();
            e.preventDefault();
          }}
          className={styles.button}
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
};

export default CartItem;
