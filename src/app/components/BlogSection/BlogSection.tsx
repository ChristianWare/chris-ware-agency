import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./BlogSection.module.css";
import BlogCard from "../BlogCard/BlogCard";
import Card from '../../../../public/images/success.png'

const BlogSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <SectionHeading
          labelText='Blog'
          headingText='News & Updates'
          copyText=' Insights and Innovations in Web Development'
        />
        
        <div className={styles.bottom}>
          <BlogCard src={Card} />
          <BlogCard src={Card} />
          <BlogCard src={Card} />
        </div>
      </div>
    </section>
  );
};
export default BlogSection;