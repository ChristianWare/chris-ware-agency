import { FC } from "react";
import Label from "../Label/Label";
import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  labelText: string;
  headingText: string;
  copyText: string;
}

const SectionHeading: FC<SectionHeadingProps> = ({
  headingText,
  copyText,
  labelText,
}) => {
  return (
    <div className={styles.top}>
      <Label text={labelText} />
      <h2 className={styles.heading}>{headingText}</h2>
      <p className={styles.copy}>{copyText}</p>
    </div>
  );
};
export default SectionHeading;
