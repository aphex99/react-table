import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <h3>404 - Страница не найдена</h3>
      <img src="src/shared/assets/not-found.jpg" alt="page not found" className={styles.img}/>
    </div>
  );
};

export default NotFound;