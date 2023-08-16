import Label from "../Label/Label";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <Label text='Services' />
        <h2>
          Web Solutions Beyond Boundaries: Our Range of Web Development Services
        </h2>
      </div>
    </section>
  );
};
export default Services;
