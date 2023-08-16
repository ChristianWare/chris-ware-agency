import Label from "../Label/Label";
import styles from "./Services.module.css";
import { servicesSection } from "../../../lib/data";
import Image from "next/image";
import Button from "../Button/Button";
import SectionHeading from "../SectionHeading/SectionHeading";

const Services = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <SectionHeading
            labelText='Services'
            headingText='Our Range of web development services'
            copyText='Feel free to contact us for custom solutions.'
          />
        </div>
        <div className={styles.bottom}>
          {servicesSection.slice(0, 1).map((x) => (
            <div key={x.id}>
              <h3 className={styles.heading2}>{x.sectionTitle}</h3>
              <div className={styles.serviceCardContainer}>
                {x.services.map((y) => (
                  <div key={y.id} className={styles.serviceCard}>
                    <Image
                      src={y.icon}
                      alt='hello'
                      title='hello'
                      width={50}
                      height={50}
                      className={styles.icon}
                    />
                    <h4 className={styles.serviceTitle}>{y.service}</h4>
                    <p className={styles.description}>{y.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.btnContainer}>
          <Button href='/services' text='More services' btnType='primary' />
        </div>
      </div>
    </section>
  );
};
export default Services;
