import { FC } from "react";
import Label from "../Label/Label";
import styles from "./PageIntro.module.css";
import Image from "next/image";
import img1 from "../../../../public/images/affordable.png";
import img2 from "../../../../public/images/code.png";
import img3 from "../../../../public/images/creative.png";
import img4 from "../../../../public/images/success.png";

interface PageIntroProps {
  label: string;
  heading: string;
  copy: string;
}

const PageIntro: FC<PageIntroProps> = ({ label, heading, copy }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.copy}>{copy}</p>
      </div>
      <div className={styles.right}>
        <div className={styles.top}>
          <div className={styles.rightLeft}>
            <h1 className={styles.heading}>{heading}</h1>
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
              src={img2}
              alt='hello'
              title='hello'
              fill
              className={styles.img2}
            />
          </div>
          <div className={styles.bottomRight}>
            <Image
              src={img3}
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
export default PageIntro;
