import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./BlogSection.module.css";

const BlogSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <SectionHeading
          labelText='Blog'
          headingText='News & Updates'
          copyText=' Insights and Innovations in Web Development'
        />
      </div>
    </section>
  );
};
export default BlogSection;
