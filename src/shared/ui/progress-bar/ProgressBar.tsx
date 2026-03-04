import {type CSSProperties, useEffect, useState} from "react";
import styles from './ProgressBar.module.scss';

export interface ProgressBarPropsType {
  isLoading: boolean;
}

const ProgressBar = ({isLoading}: ProgressBarPropsType) => {

  const [progress, setProgress] = useState(0);

  useEffect(() => {

    let interval: ReturnType<typeof setInterval> | undefined;

    if (isLoading) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 96) return prev;
          return prev + 30;
        });
      }, 100);
    } else {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 95) {
            clearInterval(interval);
            setTimeout(() => setProgress(0), 300);
            return 0;
          }
          return prev + 10;
        });
      }, 100);
    }

    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.bar} style={{"--progress": `${progress}%`} as CSSProperties}>
      </div>
    </div>
  );
};

export default ProgressBar;