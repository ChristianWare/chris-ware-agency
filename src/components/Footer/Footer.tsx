import Link from "next/link";
import styles from "./Footer.module.css";
import Instagram from "../../../public/icons/instagram.svg";
import Twitter from "../../../public/icons/twitter.svg";
import LinkedIn from "../../../public/icons/linkedin.svg";
import Pinterest from "../../../public/icons/pinterest.svg";
import Logo from "../../../public/icons/newcwalogo.png";
import Image from "next/image";
import ContentPadding from "../ContentPadding/ContentPadding";

const Footer = () => {
  return (
    <footer>
      <ContentPadding>
        <div className={styles.content}>
          <div className={styles.top}>
            <Link href='/' className={styles.logo}>
              <Image
                src={Logo}
                alt='Chris Ware Agency Logo'
                width={173}
                height={20}
              />
            </Link>
            <div className={styles.socials}>
              <Link
                href='https://www.instagram.com/'
                target='_blank'
                className={styles.iconContainer}
              >
                <Instagram className={styles.icon} width={20} height={20} />
              </Link>
              <Link
                href='https://www.linkedin.com/'
                target='_blank'
                className={styles.iconContainer}
              >
                <Twitter className={styles.icon} width={20} height={20} />
              </Link>
              <Link
                href='/https://twitter.com/'
                target='_blank'
                className={styles.iconContainer}
              >
                <LinkedIn className={styles.icon} width={20} height={20} />
              </Link>
            </div>
          </div>
          <div className={styles.bottom}>
            <p className={styles.copy}>
              Copyright &copy; 2023 Chris Ware Agency || All Rights Reserved
            </p>
          </div>
        </div>
      </ContentPadding>
    </footer>
  );
};
export default Footer;
