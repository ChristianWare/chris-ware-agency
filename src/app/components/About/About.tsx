import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <SectionHeading
          labelText='About us'
          headingText='Welcome to the Chris Ware Agency'
          copyText='An overview of who we are'
        />
      </div>
    </section>
  );
};
export default About;
