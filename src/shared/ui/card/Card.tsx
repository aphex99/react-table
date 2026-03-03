import type {ReactNode} from "react";
import styles from './Card.module.scss';

interface CardPropsType {
  children: ReactNode;
}

const Card = ({children}: CardPropsType) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner_card_border}>
        <div className={styles.inner_card}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;