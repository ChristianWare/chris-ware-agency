import Image from "next/image";
import Section from "../Section/Section";
import styles from "./AllServices.module.css";
import { servicesSection } from "@/app/lib/data";

const AllServices = () => {
  return (
    <Section
      labelText='All Services'
      headingText='Our Comprehensive Web Solutions'
      copyText='A Suite of Services to Elevate Your Online Impact'
    >
      <div className={styles.bottom}>
        {servicesSection.map((x) => (
          <div key={x.id}>
            <h3 className={styles.heading2}>{x.sectionTitle}</h3>
            <div className={styles.serviceCardContainer}>
              {x.services.map((y) => (
                <div key={y.id} className={styles.serviceCard}>
                  <Image
                    src={y.icon}
                    alt={y.service}
                    title={y.service}
                    width={50}
                    height={50}
                    className={styles.icon}
                  />
                  <strong className={styles.serviceTitle}>{y.service}</strong>
                  <p className={styles.description}>{y.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
export default AllServices;
