import Image from "next/image";
import styles from "./FinalCta.module.css";
import img3 from "../../../public/images/success.png";
import img4 from "../../../public/images/affordable.png";
import Button from "../Button/Button";

import Calendar from "../../../public/icons/calendar.png";

const FinalCta = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h2>The Chris Ware Agency</h2>
        <p className={styles.copy}>
          We Merge Imagination and Innovation in Web Design and Development,
          Crafting Websites that Captivate, Convert, and Catapult Businesses to
          New Heights in the Digital Landscape.
        </p>
        <div className={styles.btnContainer}>
          <Button href='/contact' btnType='primary' text='Get in touch' />
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
      <div className={styles.workCulture}>
        <div className={styles.card}>
          <div className={styles.imgContainer}>
            <Image
              src={img3}
              alt='hey'
              title='hey'
              fill
              className={styles.img}
            />
          </div>
        </div>
        <div className={styles.card2}>
          <h3 className={styles.heading}>Ready to start a project?</h3>
        </div>
        <div className={styles.card3}>
          <h3 className={styles.heading}>Call Us Today !</h3>
        </div>
        <div className={styles.card4}>
          <div className={styles.imgContainer}>
            <Image
              src={img4}
              alt='hey'
              title='hey'
              fill
              className={styles.img4}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FinalCta;
