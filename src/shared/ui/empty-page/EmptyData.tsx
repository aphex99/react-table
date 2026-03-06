import EmptyStateImage from "../../assets/images/empty-state.png";

import styles from './EmptyData.module.scss';

const EmptyData = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.description_wrapper}>
            <h2>Товары<br/> не найдены</h2>
          </div>
          <div className={styles.img_wrapper}>
            <img src={EmptyStateImage} alt="Иллюстрация ошибки о не найденной странице"
                 className={styles.img}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyData;