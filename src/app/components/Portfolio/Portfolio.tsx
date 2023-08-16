import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Portfolio.module.css";
import { portfolio } from "@/lib/data";

const Portfolio = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <SectionHeading
            labelText='Our Work'
            copyText='From Code to Creation'
            headingText='A Glimpse into Our Portfolio'
          />
        </div>
        <div className={styles.bottom}>
            Here, we will map throug a list of projects.
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
