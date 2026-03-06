import {useState} from "react";

import Card from "@/shared/ui/card/Card.tsx";
import Logo from "@/shared/ui/logo/Logo.tsx";
import {SpinnerLoader} from "@/shared/ui/spinner-loader/SpinnerLoader.tsx";

import AuthForm from "./auth-form/AuthForm.tsx";

import styles from './Auth.module.scss';

const Auth = () => {
  const [showLoader, setShowLoader] = useState(false);

  return (
    <div className={styles.wrapper}>
      <Card>
        <div className={styles.container}>
          <Logo/>
          <div className={styles.heading_container}>
            <h2 className={styles.h2}>Добро пожаловать!</h2>
            <p className={styles.heading_description}>Пожалуйста, авторизируйтесь</p>
          </div>
          <AuthForm handleLoader={setShowLoader}/>
          <div className={styles.underline_container}>
            <hr className={styles.hr}/>
            <span className={styles.underline_text}>или</span>
            <hr className={styles.hr}/>
          </div>
          <div className={styles.create_account_container}>
            <span className={styles.create_account_text}>Нет аккаунта?</span>
            <a href="#" className={styles.create_account_link}>Создать</a>
          </div>
          {showLoader && <SpinnerLoader/>}
        </div>
      </Card>
    </div>
  );
};

export default Auth;