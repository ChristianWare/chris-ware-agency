import Button from "../Button/Button";
import styles from "./Hero.module.css";
import PhoneCall from "../../../public/icons/phone.svg";
import Calendar from "../../../public/icons/calendar-mark-svgrepo-com.svg";
import ContentPadding from "../ContentPadding/ContentPadding";
import Instagram from "../../../public/icons/instagram.svg";
import LinkedIn from "../../../public/icons/linkedin.svg";
import Twitter from "../../../public/icons/twitter.svg";
import Image from "next/image";
import Hero6 from "../../../public/images/hero6.png";
import Label from "../Label/Label";
import RotatingText from "../RotatingText/RotatingText";
import Link from "next/link";

const Hero = () => {
  return (
    <section className={styles.container}>
      <ContentPadding>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.lableContainer}>
              <Label text='// Welcome //' />
            </div>
            <h1 className={styles.heading}>
              Want a better looking website than your{" "}
              <span className={styles.highlight}>competitors?</span>
            </h1>
            <p className={styles.copy} lang='en'>
              Our stylish web designs will delight your target audience and{" "}
              <strong>keep them coming back for more.</strong>
            </p>
            <div className={styles.btnContainer}>
              <Button href='/#contact' btnType='secondary'>
                <Calendar width={20} height={20} />
                Book a meeting
              </Button>
              <Button href='/#contact' btnType='primary'>
                <PhoneCall width={20} height={20} />
                Contact us
              </Button>
            </div>
            <div className={styles.socialsContainer}>
              <div className={styles.socialIconContainer}>
                <Link
                  href='https://www.instagram.com/'
                  target='_blank'
                  className={styles.socailIcon}
                >
                  <Instagram width={15} height={15} />
                </Link>
              </div>
              <div className={styles.socialIconContainer}>
                <Link
                  href='https://www.linkedin.com/'
                  target='_blank'
                  className={styles.socailIcon}
                >
                  <LinkedIn width={15} height={15} />
                </Link>
              </div>
              <div className={styles.socialIconContainer}>
                <Link
                  href='/https://twitter.com/'
                  target='_blank'
                  className={styles.socailIcon}
                >
                  <Twitter width={15} height={15} />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <Image
                src={Hero6}
                alt='man looking at a website and smiling'
                fill
                quality={100}
                priority={true}
                className={styles.img}
              />
            </div>
          </div>
        </div>
        <div className={styles.rtContainer}>
          <RotatingText text='scroll down' showArrow={true} />
        </div>
        {/* <h2 className={styles.strong}>Core Statistics:</h2>
        <div className={styles.statsContainer}>
          <div className={styles.stat}>
            <div className={styles.statHeading}>50+</div>
            <p className={styles.statDetail}>Websites Built</p>
          </div>
          <div className={styles.stat}>
            <div className={styles.statHeading}>2,200+</div>
            <p className={styles.statDetail}>Homes being built</p>
          </div>
          <div className={styles.stat}>
            <div className={styles.statHeading}>140+</div>
            <p className={styles.statDetail}>Staff members</p>
          </div>
          <div className={styles.stat}>
            <div className={styles.statHeading}>5</div>
            <p className={styles.statDetail}>Regional offices</p>
          </div>
        </div> */}
      </ContentPadding>
    </section>
  );
};
export default Hero;
