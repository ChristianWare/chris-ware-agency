import { FC } from "react";

import Link from "next/link";
import styles from "./Button.module.css";
import { Button as ButtonProps } from "@/lib/interface";

const Button: FC<ButtonProps> = ({
  href = "",
  btnType,
  icon,
  children,
  target = "",
}) => {
  return (
    <button className={styles.container}>
      <Link
        href={href}
        className={`${styles.btn} ${styles[btnType]}`}
        target={target}
      >
        {icon && <span className={styles.icon}>{icon}</span>}
        {children}
      </Link>
    </button>
  );
};
export default Button;
