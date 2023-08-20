import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Faq.module.css";

const Faq = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <SectionHeading
          labelText='FAQ&#39;s'
          headingText='Frequently Asked Questions'
          copyText='Common questions and answers'
        />
      </div>
    </section>
  );
};
export default Faq;
