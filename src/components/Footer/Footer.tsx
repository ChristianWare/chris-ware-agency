import Link from "next/link";
import styles from "./Footer.module.css";
import Instagram from "../../../../public/icons/instagram.svg";
import Twitter from "../../../../public/icons/twitter.svg";
import LinkedIn from "../../../../public/icons/linkedin.svg";
import Pinterest from "../../../../public/icons/pinterest.svg";

const Footer = () => {
  return (
    <footer>
      <div className={styles.content}>
        <div className={styles.top}>
          <Link href='/' className={styles.logo}>
            Chris ware Agency
          </Link>
          <div className={styles.socials}>
            <Link href='/' className={styles.iconContainer}>
              <Instagram className={styles.icon} width={20} height={20} />
            </Link>
            <Link href='/' className={styles.iconContainer}>
              <Twitter className={styles.icon} width={20} height={20} />
            </Link>
            <Link href='/' className={styles.iconContainer}>
              <LinkedIn className={styles.icon} width={20} height={20} />
            </Link>
            <Link href='/' className={styles.iconContainer}>
              <Pinterest className={styles.icon} width={20} height={20} />
            </Link>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copy}>
            Copyright &copy; 2023 Chris Ware Agency || All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
