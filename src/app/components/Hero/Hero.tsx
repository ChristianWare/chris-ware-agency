import Button from "../Button/Button";
import styles from "./Hero.module.css";
import Image from "next/image";
import HeroImage from "../../../../public/images/hero5.png";
import Calendar from "../../../../public/icons/calendar.png";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h1 className={styles.title}>
            Chris Ware Agency: <br />
            Elevating Brands through Innovative Web Design and Development.
          </h1>
          <p className={styles.copy}>
            We Merge Imagination and Innovation in Web Design and Development,
            Crafting Websites that Captivate, Convert, and Catapult Businesses
            to New Heights in the Digital Landscape.
          </p>
          <div className={styles.btnContainer}>
            <Button href='/' btnType='primary' text='Get in touch' />
            <Button
              href='/'
              btnType='secondary'
              text='Book a meeting'
              icon={
                <Image
                  src={Calendar}
                  alt='hey'
                  className={styles.icon}
                  width={20}
                  height={20}
                />
              }
            />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.imgContainer}>
            <Image
              src={HeroImage}
              alt='hero'
              className={styles.img}
              fill={true}
              sizes='100vw'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
