import { FC } from "react";
import Label from "../Label/Label";
import styles from "./PageIntro.module.css";
import Image from "next/image";
import img1 from "../../../../public/images/contact1.png";
import img2 from "../../../../public/images/contact2.png";
import img3 from "../../../../public/images/contact3.png";
import img4 from "../../../../public/images/contact4.png";

interface PageIntroProps {
  heading: string;
  copy: string;
}

const PageIntro: FC<PageIntroProps> = ({  heading, copy }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.copy}>{copy}</p>
      </div>
      <div className={styles.right}>
        <div className={styles.top}>
          <div className={styles.rightLeft}>
            <Image
              src={img4}
              alt='hello'
              title='hello'
              fill
              className={styles.img5}
            />
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
