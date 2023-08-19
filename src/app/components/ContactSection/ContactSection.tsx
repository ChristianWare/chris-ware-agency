import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./ContactSection.module.css";

const ContactSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <SectionHeading
          labelText='Contact'
          headingText='Get in Touch'
          copyText="Let's start a conversation about your web projects."
        />
        <div className={styles.bottom}>
            <div className={styles.left}>Text Here</div>
            <div className={styles.right}>Form here</div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
