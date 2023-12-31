import { FC } from "react";
import styles from "./PageIntro.module.css";
import Image, { StaticImageData } from "next/image";
import Label from "../Label/Label";

interface PageIntroProps {
  heading: string;
  copy: string;
  src1: StaticImageData;
  src2: StaticImageData;
  src3: StaticImageData;
  src4: StaticImageData;
  labelText: string;
}

const PageIntro: FC<PageIntroProps> = ({
  heading,
  copy,
  src1,
  src2,
  src3,
  src4,
  labelText,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Label text={labelText} />
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.copy}>{copy}</p>
      </div>
      <div className={styles.right}>
        <div className={styles.top}>
          <div className={styles.rightLeft}>
            <Image
              src={src1}
              alt='hello'
              title='hello'
              fill
              priority
              className={styles.img5}
            />
          </div>
          <div className={styles.rightRight}>
            <Image
              src={src2}
              alt='hello'
              title='hello'
              fill
              priority
              className={styles.img}
            />
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <Image
              src={src3}
              alt='hello'
              title='hello'
              fill
              priority
              className={styles.img2}
            />
          </div>
          <div className={styles.bottomRight}>
            <Image
              src={src4}
              alt='hello'
              title='hello'
              fill
              priority
              className={styles.img3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PageIntro;
