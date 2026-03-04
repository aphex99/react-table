import {ScaleLoader} from "react-spinners";
import styles from "./SpinnerLoader.module.scss";

export const SpinnerLoader = () => {
  return (
    <div className={styles.spinner_container}>
      <ScaleLoader
        color={'gray'}
        aria-label={"Loading Spinner"}
      />
    </div>
  );
};