import Label from "../Label/Label";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <Label text='Services' />
          <h2 className={styles.heading}>
            Web Solutions Beyond Boundaries: Our Range of Web Development
            Offerings
          </h2>
        </div>
        <div className={styles.bottom}>

        </div>
      </div>
    </section>
  );
};
export default Services;
