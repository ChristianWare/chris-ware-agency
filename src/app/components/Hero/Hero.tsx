import Button from "../Button/Button";
import styles from "./Hero.module.css";
import Image from "next/image";
import HeroImage from "../../../../public/images/hero5.png";
import Calendar from "../../../../public/icons/calendar.png";
import ContentPadding from "../ContentPadding/ContentPadding";
import Instagram from "../../../../public/icons/instagram.svg";
import LinkedIn from "../../../../public/icons/linkedin.svg";
import Link from "next/link";

const Hero = () => {
  return (
    <section className={styles.container}>
      <ContentPadding>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.heading}>
              Want a better looking website than your competitors?
            </h1>
          </div>
          <div className={styles.right}>
            <p className={styles.copy}>
              We can make that happen with stylish web design that delights your
              target audience and delivers qualified leads.
            </p>
            <div className={styles.btnContainer}>
              <Button
                href='/contact'
                btnType='primary'
                text='Book a meeting'
                icon={
                  <Image
                    src={Calendar}
                    alt='calendar'
                    title='calendar'
                    className={styles.icon}
                    width={15}
                    height={15}
                  />
                }
              />
            </div>
          </div>
          <div className={styles.socialsContainer}>
            <div className={styles.socialIconContainer}>
              <Instagram width={15} height={15} />
            </div>
            <div className={styles.socialIconContainer}>
              <LinkedIn width={15} height={15} />
            </div>
            {/* <LinkedIn width={20} height={20} /> */}
          </div>
        </div>
      </ContentPadding>
    </section>
  );
};
export default Hero;
