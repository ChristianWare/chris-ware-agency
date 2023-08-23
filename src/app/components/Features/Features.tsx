import Q1 from "../q1/Q1";
import Q2 from "../q2/Q2";
import Q3 from "../q3/Q3";
import Q4 from "../q4/Q4";
import styles from "./Features.module.css";

const Features = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Q1 />
        <Q2 />
      </div>
      <div className={styles.bottom}>
        <Q3 />
        <Q4 />
      </div>
    </div>
  );
};
export default Features;
