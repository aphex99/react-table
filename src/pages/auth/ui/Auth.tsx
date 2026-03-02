import AuthForm from "@/pages/auth/ui/auth-form/AuthForm.tsx";
import {SpinnerLoader} from "@/shared/ui/spinner-loader/SpinnerLoader.tsx";
import {useState} from "react";

import styles from './Auth.module.scss';

const Auth = () => {
  const [showLoader, setShowLoader] = useState(false);

  return (
    <div className={styles.container}>
      <AuthForm handleLoader={setShowLoader}/>
      {showLoader && <SpinnerLoader/>}
    </div>
  );
};

export default Auth;