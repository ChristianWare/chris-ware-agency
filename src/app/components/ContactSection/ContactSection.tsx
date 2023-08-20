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
              business.
            </h3>
          </div>
          <div className={styles.right}>
            <form className={styles.form}>
              <div className={styles.namesContainer}>
                <div className={styles.labelInputBox}>
                  <label htmlFor='firstName'>First Name</label>
                  <input id='firstName' type='text' required />
                </div>
                <div className={styles.labelInputBox}>
                  <label htmlFor='lastName'>Last Name</label>
                  <input id='lastName' type='text' required />
                </div>
              </div>
              <div className={styles.everythingElse}>
                <div className={styles.labelInputBox}>
                  <label htmlFor='email'>Email</label>
                  <span>So we can respond. We won&#39;t send you spam.</span>
                  <input id='email' type='email' required />
                </div>
                <div className={styles.labelInputBox}>
                  <label htmlFor='companyName'>Company Name</label>
                  <input id='companyName' type='text' />
                </div>
                <div className={styles.labelInputBox}>
                  <label htmlFor='message'>Message</label>
                  <span>No solicitations, please.</span>
                  <textarea id='message' />
                </div>
              </div>
              <div className={styles.btnBtnContainer}>
                <div className={styles.btnContainer}>
                  <button type='submit' className={styles.btn}>
                    Fire Away! 
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
