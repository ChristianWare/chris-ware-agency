import Button from "../Button/Button";
import styles from "./Hero.module.css";
import Image from "next/image";
import HeroImage from "../../../../public/images/hero5.png";
import Calendar from "../../../../public/icons/calendar.png";
import Label from "../Label/Label";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <Label text='Welcome!' />
          <h1>
            We Elevate Brands through Innovative Web Design and Development
          </h1>
          {/* <p className={styles.copy}>
            At the Chris Ware Agency, we Merge Imagination and Innovation in Web
            Design and Development, Crafting Websites that Captivate, Convert,
            and Catapult Businesses to New Heights in the Digital Landscape.
          </p> */}
          <div className={styles.btnContainer}>
            <Button href='/' btnType='primary' text='Get in touch' />
            <Button
              href='/'
              btnType='secondary'
              text='Book a meeting'
              icon={
                <Image
                  src={Calendar}
                  alt='calendar'
                  title='calendar'
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
              alt='Business man looking in his laptop'
              title='Business man looking in his laptop'
              className={styles.img}
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
