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
          <div className={styles.left}>
            <h3 className={styles.heading}>
              We&#39;re dedicated to building impressive websites for your
              business. Collaborate with the chris ware agency today!
            </h3>
          </div>
          <div className={styles.right}>
            <form className={styles.form}>
              <label></label>
              <input type='email' />
              <textarea />
              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
