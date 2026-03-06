import {useNavigate} from "react-router-dom";

import NotFoundImage from '@/shared/assets/images/not-found.jpg';
import ArrowLeft from '@/shared/assets/icons/arrow-left.svg?react';
import Button from "@/shared/ui/button/Button.tsx";

import styles from './NotFound.module.scss';

const NotFound = () => {
  const navigate = useNavigate();
  const handleNavigateBack = () => {
    navigate("/", {replace: true});
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.description_wrapper}>
        <h2>Oops!</h2>
        <p>Мы не нашли страницу, которую вы ищите</p>
        <Button type={"button"}
                className={styles.button}
                onClick={handleNavigateBack}
        ><ArrowLeft/>На главный экран</Button>
      </div>
      <div className={styles.img_wrapper}>
        <img src={NotFoundImage} alt="Иллюстрация ошибки о не найденной странице"
             className={styles.img}
        />
      </div>
    </div>
  );
};

export default NotFound;