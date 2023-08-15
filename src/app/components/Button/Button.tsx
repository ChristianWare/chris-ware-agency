import { FC, ReactNode } from "react";

import Link from "next/link";
import styles from "./Button.module.css";

interface ButtonProps {
  href: string;
  text: string;
  btnType: string;
  icon?: ReactNode;
}

const Button: FC<ButtonProps> = ({ href = "", text, btnType, icon }) => {
  return (
    <button>
      <Link href={href} className={`${styles.btn} ${styles[btnType]}`}>
        {icon && <span className={styles.icon}>{icon}</span> }
        {text}
      </Link>
    </button>
  );
};
export default Button;
