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
            Web Solutions Beyond Boundaries: Our Range of Web Development
            Services
          </h2>
          <p className={styles.copy}>
            Feel free to contact us for custom soultions.
          </p>
        </div>
        <div className={styles.bottom}>
          {/* <h3 className={styles.heading2}>What We Build</h3> */}
          {servicesSection.map((x) => (
            <div key={x.id}>
              {x.sectionTitle}
              <div>
                {x.services.map((y) => (
                  <div key={y.id}>
                    <h4>{y.service}</h4>
                    <p>{y.description}</p>
                    <Image src={y.icon} alt='hello' width={50} height={50} />
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
