import styles from "./Label.module.css";
import { FC } from "react";

interface LabelProps {
  text: string;
  color?: string;
}

const Label: FC<LabelProps> = ({ text, color }) => {
  return (
    <span className={`${styles.label} ${styles[color]}`}>{text}</span>
  );
};
export default Label;
