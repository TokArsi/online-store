import styles from './Categories.module.scss';
import { Link } from 'react-router-dom';

const Categories = ({ setActive, active }) => {
  return (
    <div className={styles.root}>
      <Link to={'/shop'}>
        <button
          className={`${styles.category} ${
            active == 'clothes' && styles.active
          }`}
          onClick={() => setActive('clothes')}
        >
          ВЕРХНЯЯ ОДЕЖДА
        </button>
        <button
          className={`${styles.category} ${
            active == 'sneakers' && styles.active
          }`}
          onClick={() => setActive('sneakers')}
        >
          СПОРТИВНАЯ ОБУВЬ
        </button>
        <button
          className={`${styles.category} ${
            active == 'pants' && styles.active
          }`}
          onClick={() => setActive('pants')}
        >
          СПОРТИВНЫЕ ШТАНЫ
        </button>
      </Link>
    </div>
  );
};

export default Categories;
