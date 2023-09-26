import Image from "next/image";
import styles from "./Q1.module.css";
import img1 from "../../../../public/images/affordable.png";

const Q1 = () => {
  return (
    <div className={styles.pageIntroContainer}>
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
              <Image
                src={img1}
                alt='hello'
                title='hello'
                fill
                className={styles.img2}
              />
            </div>
            <div className={styles.bottomRight}>
              <strong className={styles.heading}>
                Responsive
              </strong>
            </div>
          </div>
    </div>
  );
};
export default Q1;
