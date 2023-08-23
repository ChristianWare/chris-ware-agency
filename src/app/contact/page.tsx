import BlogSection from '../components/BlogSection/BlogSection';
import ContactSection from '../components/ContactSection/ContactSection';
import FinalCta from '../components/FinalCta/FinalCta';
import PageIntro from '../components/PageIntro/PageIntro';
import styles from './ContactPage.module.css'

const ContactPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.pageIntroContainer}>
        <PageIntro
          label='Faq&#39;'
          heading='Frequently Asked Questions about the Chris Ware Agency'
          copy='We&#39;re here to address your queries and provide clarity on the intricacies of our services. Whether you&#39;re curious about our process, pricing, or the technologies we employ, you&#39;ll find comprehensive answers here. Our goal is to empower you with the information you need to make informed decisions about your digital journey. Explore the questions below to uncover valuable insights into how we can transform your online presence.'
        />
      </div>
      <BlogSection />
      <FinalCta />
      <ContactSection />
    </section>
  );
}
export default ContactPage