import Q1 from "../q1/Q1";
import Q2 from "../q2/Q2";
import Q3 from "../q3/Q3";
import Q4 from "../q4/Q4";
import styles from "./Features.module.css";

const Features = () => {
  return (
    <div className={styles.container}>
      <div className={styles.q1}>
        <Q1 />
      </div>
      <div className={styles.q2}>
        <Q2 />
      </div>
      <div className={styles.q3}>
        <Q3 />
      </div>
      <div className={styles.q4}>
        <Q4 />
      </div>
    </div>
  );
};
export default Features;
