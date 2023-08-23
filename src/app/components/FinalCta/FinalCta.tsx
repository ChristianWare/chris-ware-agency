import Image from "next/image";
import styles from "./FinalCta.module.css";
import img3 from "../../../../public/images/success.png";
import img4 from "../../../../public/images/affordable.png";
import Button from "../Button/Button";

const FinalCta = () => {
  return (
    <div className={styles.container}>
      <h2>The Chris Ware Agency</h2>
      <div className={styles.workCulture}>
        <div className={styles.card}>
          <div className={styles.imgContainer}>
            <Image
              src={img3}
              alt='hey'
              title='hey'
              fill
              className={styles.img}
            />
          </div>
        </div>
        <div className={styles.card2}>
          <h3 className={styles.heading}>Don&#39;t wait to Act</h3>
          <div className={styles.btnContainer}>
            <Button text='Schedule a meeting' btnType='secondary' href='/' />
          </div>
        </div>
        <div className={styles.card3}>
          <h3 className={styles.heading}>Contact Us Now</h3>
          <div className={styles.btnContainer}>
            <Button text='contact us' btnType='primary' href='/' />
          </div>
        </div>
        <div className={styles.card4}>
          <div className={styles.imgContainer}>
            <Image
              src={img4}
              alt='hey'
              title='hey'
              fill
              className={styles.img4}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FinalCta;
