import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <SectionHeading
            labelText='About us'
            headingText='Welcome to the Chris Ware Agency'
            copyText='An overview of who we are'
          />
        </div>
        <div className={styles.bottom1}>
          <div className={styles.left}>Image Here</div>
          <div className={styles.right}>Text Here</div>
        </div>
        <div className={styles.bottom2}>
          <div className={styles.left}>Text Here</div>
          <div className={styles.right}>Image Here</div>
        </div>
      </div>
    </section>
  );
};
export default About;
