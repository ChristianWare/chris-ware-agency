import styles from "./Services.module.css";
import { servicesSection, features } from "../../lib/data";
import Image from "next/image";
import Button from "../Button/Button";
import SectionHeading from "../SectionHeading/SectionHeading";
import Features from "../Features/Features";
import ContentPadding from "../ContentPadding/ContentPadding";
import Label from "../Label/Label";

const Services = () => {
  return (
    <section className={styles.container}>
      <ContentPadding>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.lableContainer}>
              <Label text='// Our Services //' />
            </div>
            <h2 className={styles.heading3}>
              What we can do for
              <span className={styles.highlight}>you</span>
            </h2>
            <p className={styles.topText}>
              With me you don&#39;t pay for expensive agency equipment, just the
              added value of my work. 
              <br />
              <br />
              I am your sole contact person throughout
              the entire project, which means we can work together quickly and
              safely.
            </p>
          </div>
          <div className={styles.right}></div>
        </div>
      </ContentPadding>
    </section>
  );
};
export default Services;
