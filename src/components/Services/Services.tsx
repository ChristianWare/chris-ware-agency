import styles from "./Services.module.css";
import { servicesSection, features } from "../../lib/data";
import ContentPadding from "../ContentPadding/ContentPadding";
import Label from "../Label/Label";
import Button from "../Button/Button";
import Calendar from "../../../public/icons/calendar-mark-svgrepo-com.svg";
import PhoneCall from "../../../public/icons/phone.svg";
import Image from "next/image";

const Services = () => {
  return (
    <section className={styles.container}>
      <ContentPadding>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.lableContainer}>
              <Label text='// Our Services //' />
            </div>
            <h2 className={styles.heading}>
              What we can do for
              <span className={styles.highlight}>you</span> 🫵
            </h2>
            <p className={styles.topText}>
              With me you don&#39;t pay for expensive agency equipment, just the
              added value of our work.
            </p>
          </div>
          <div className={styles.bottom}>
            {servicesSection.map((x) => (
              <div key={x.id} className={styles.card}>
                <Image
                  src={x.icon}
                  alt={x.service}
                  width={30}
                  height={30}
                  className={styles.img}
                />
                <h4 className={styles.service}>{x.service}</h4>
                <p className={styles.description}>{x.description}</p>
              </div>
            ))}
          </div>
          <div className={styles.btnContainer}>
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
          </div>
        </div>
      </ContentPadding>
    </section>
  );
};
export default Services;
