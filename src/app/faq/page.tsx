import PageIntro from "../components/PageIntro/PageIntro";
import styles from "./Faq.module.css";

const FaqPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.pageIntroContainer}>
        <PageIntro
          label='Faq&#39;'
          heading='Frequently Asked Questions about us'
          copy='We&#39;re here to address your queries and provide clarity on the intricacies of our services. Whether you&#39;re curious about our process, pricing, or the technologies we employ, you&#39;ll find comprehensive answers here. Our goal is to empower you with the information you need to make informed decisions about your digital journey. Explore the questions below to uncover valuable insights into how we can transform your online presence.'
        />
      </div>
    </section>
  );
};
export default FaqPage;
