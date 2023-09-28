import styles from "./Services.module.css";
import { servicesSection, features } from "../../lib/data";
import ContentPadding from "../ContentPadding/ContentPadding";
import Label from "../Label/Label";

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
              <span className={styles.highlight}>you</span>
            </h2>
            <p className={styles.topText}>
              With me you don&#39;t pay for expensive agency equipment, just the
              added value of our work.
            </p>
          </div>
          <div className={styles.bottom}>
            {servicesSection.map((x) => (
              <div key={x.id} className={styles.area}>
                <h3>{x.sectionTitle}</h3>
                <div className={styles.group}>
                  {x.services.map((y) => (
                    <div key={y.id} className={styles.card}>
                      <h4>{y.service}</h4>
                      <p>{y.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentPadding>
    </section>
  );
};
export default Services;
