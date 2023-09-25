import Button from "../Button/Button";
import styles from "./Hero.module.css";
import Image from "next/image";
import HeroImage from "../../../../public/images/hero5.png";
import Calendar from "../../../../public/icons/calendar.png";
import ContentPadding from "../ContentPadding/ContentPadding";

const Hero = () => {
  return (
    <section className={styles.container}>
      <ContentPadding>
        <div className={styles.content}>
          <div>
            <h1 className={styles.heading}>Make your website work for you.</h1>
          </div>
          <div>
            <p className={styles.copy}>
              With stylish web design that delights your target group and
              delivers qualified customers.
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
              {/* <Button href='/contact' btnType='primary' text='Contact us' /> */}
            </div>
          </div>
        </div>
      </ContentPadding>
    </section>
  );
};
export default Hero;
