import styles from "./SpinnerLoader.module.scss";
import {ScaleLoader} from "react-spinners";

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