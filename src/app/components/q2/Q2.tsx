import styles from "./Q2.module.css";
import img1 from "../../../../public/images/collab3.png";
import Image from "next/image";

const Q2 = () => {
  return (
    <div className={styles.pageIntroContainer}>
      <div className={styles.right}>
        <div className={styles.top}>
          <div className={styles.rightLeft}>
            <Image
              src={img1}
              alt='hello'
              title='hello'
              fill
              className={styles.img}
            />
          </div>
          <div className={styles.rightRight}>
            <Image
              src={img1}
              alt='hello'
              title='hello'
              fill
              className={styles.img3}
            />
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <h2 className={styles.heading}>Accessible</h2>
          </div>
          <div className={styles.bottomRight}>
            <Image
              src={img1}
              alt='hello'
              title='hello'
              fill
              className={styles.img2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Q2;
