import styles from './Q3.module.css'
import img1 from "../../../../public/images/collab1.png";
import Image from "next/image";

const Q3 = () => {
  return (
    <div className={styles.pageIntroContainer}>
      <div className={styles.container2}>
        <div className={styles.left}></div>
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
              <strong className={styles.heading}>Search Engine Optimized</strong>
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
    </div>
  );
}
export default Q3