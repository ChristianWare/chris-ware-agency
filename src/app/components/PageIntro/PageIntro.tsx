import { FC } from "react";
import Label from "../Label/Label";
import styles from "./PageIntro.module.css";

interface PageIntroProps {
  label: string;
  heading: string;
  copy: string;
}

const PageIntro: FC<PageIntroProps> = ({ label, heading, copy }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Label text={label} />
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.copy}>{copy}</p>
      </div>
      <div className={styles.right}></div>
    </div>
  );
};
export default PageIntro;
