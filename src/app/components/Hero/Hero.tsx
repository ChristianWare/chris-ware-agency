import Button from "../Button/Button";
import styles from "./Hero.module.css";
import PhoneCall from "../../../../public/icons/phone.svg";
import Calendar from "../../../../public/icons/calendar-mark-svgrepo-com.svg";
import ContentPadding from "../ContentPadding/ContentPadding";
import Instagram from "../../../../public/icons/instagram.svg";
import LinkedIn from "../../../../public/icons/linkedin.svg";
import Twitter from "../../../../public/icons/twitter.svg";
import Image from "next/image";
import Hero6 from "../../../../public/images/hero6.png";

const Hero = () => {
  return (
    <>
      <section className={styles.container}>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.left}>
              <h1 className={styles.heading} lang="en">
                Want a better looking website than your competitors?
              </h1>
              <p className={styles.copy}>
                We can make that happen with our stylish web designs that&#39;ll delight
                your target audience and keep them coming back for more.
              </p>
              <div className={styles.btnContainer}>
                <Button href='/contact' btnType='secondary'>
                  <Calendar width={20} height={20} />
                  Book a meeting
                </Button>
                <Button href='/contact' btnType='primary'>
                  <PhoneCall width={20} height={20} />
                  Contact us
                </Button>
              </div>
              <div className={styles.socialsContainer}>
                <div className={styles.socialIconContainer}>
                  <Instagram width={15} height={15} />
                </div>
                <div className={styles.socialIconContainer}>
                  <LinkedIn width={15} height={15} />
                </div>
                <div className={styles.socialIconContainer}>
                  <Twitter width={15} height={15} />
                </div>
              </div>
            </div>
            <div className={styles.right}>
              
              <div className={styles.imgContainer}>
                <Image
                  src={Hero6}
                  alt='man looking at a website and smiling'
                  fill
                  className={styles.img}
                />
              </div>
            </div>
          </div>
             
        </ContentPadding>
      </section>
    </>
  );
};
export default Hero;
