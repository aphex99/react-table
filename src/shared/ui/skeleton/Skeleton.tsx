import styles from "./Skeleton.module.scss";

interface SkeletonProps {
  count?: number;
}

const Skeleton = ({count = 1}: SkeletonProps) => {
  return (
    <>
      {Array.from({length: count}).map((_, i) => (
        <div key={i} className={styles.skeleton}/>
      ))}
    </>
  );
};

export default Skeleton;