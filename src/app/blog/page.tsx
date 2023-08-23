import BlogSection from "../components/BlogSection/BlogSection";
import ContactSection from "../components/ContactSection/ContactSection";
import FinalCta from "../components/FinalCta/FinalCta";
import PageIntro from "../components/PageIntro/PageIntro";
import styles from "./blogPage.module.css";

const BlogPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.pageIntroContainer}>
        <PageIntro
          heading='Blog'
          copy='We&#39;re excited to connect with you! Whether you&#39;re ready to embark on a new project, have questions about our services, or simply want to discuss your digital aspirations, we&#39;re here to listen. At the Chris Ware Agency, we value every opportunity to collaborate and create. Let&#39;s start a conversation that leads to exceptional online experiences. Reach out to us using the contact details below, and let&#39;s begin shaping your digital success story together.'
        />
      </div>
      <BlogSection />
      <FinalCta />
      <ContactSection />
    </section>
  );
};
export default BlogPage;
