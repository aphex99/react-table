import clsx from "clsx";

import styles from "./Skeleton.module.scss";

interface SkeletonProps {
  count?: number;
  skeletonClassName?: string;
  wrapperClassName?: string;
}

const Skeleton = ({count = 1, skeletonClassName, wrapperClassName}: SkeletonProps) => {
  return (
    <div className={wrapperClassName}>
      {Array.from({length: count}).map((_, i) => (
        <div key={i} className={clsx(styles.skeleton, skeletonClassName)}/>
      ))}
    </div>
  );
};

export default Skeleton;