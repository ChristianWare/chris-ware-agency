import Label from "../Label/Label";
import styles from "./Services.module.css";
import { servicesSection } from "../../../lib/data";
import Image from "next/image";

const Services = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <Label text='Services' />
          <h2 className={styles.heading}>
            Our Range of Web Development
            Services
          </h2>
          <p className={styles.copy}>
            Feel free to contact us for custom soultions.
          </p>
        </div>
        <div className={styles.bottom}>
          {servicesSection.map((x) => (
            <div key={x.id}>
              <h3 className={styles.heading2}>{x.sectionTitle}</h3>
              <div className={styles.serviceCardContainer}>
                {x.services.map((y) => (
                  <div key={y.id} className={styles.serviceCard}>
                    <Image src={y.icon} alt='hello' width={50} height={50} className={styles.icon} />
                    <h4 className={styles.serviceTitle}>{y.service}</h4>
                    <p className={styles.description}>{y.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
