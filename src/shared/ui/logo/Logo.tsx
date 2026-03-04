import LogoIcon from '../../assets/icons/logo.svg?react';

import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.outer_container}>
        <div className={styles.inner_container}>
          <LogoIcon/>
        </div>
      </div>
    </div>
  );
};

export default Logo;