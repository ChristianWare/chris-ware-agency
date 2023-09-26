import styles from "./Q4.module.css";
import img1 from "../../../../public/images/hero4.png";
import Image from "next/image";

const Q4 = () => {
  return (
    <div className={styles.pageIntroContainer}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        <div className={styles.top}>
          <div className={styles.rightLeft}>
            <strong className={styles.heading}>Page Speed Optimized</strong>
          </div>
          <div className={styles.rightRight}>
            <Image
              src={img1}
              alt='hello'
              title='hello'
              fill
              className={styles.img}
            />
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <Image
              src={img1}
              alt='hello'
              title='hello'
              fill
              className={styles.img2}
            />
          </div>
          <div className={styles.bottomRight}>
            <Image
              src={img1}
              alt='hello'
              title='hello'
              fill
              className={styles.img3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Q4;
