import Image from "next/image";
import AllFaq from "../components/AllFaqs/AllFaq";
import BlogSection from "../components/BlogSection/BlogSection";
import ContactSection from "../components/ContactSection/ContactSection";
import FinalCta from "../components/FinalCta/FinalCta";
import styles from "./Faq.module.css";
import img1 from "../../../public/images/collab3.png";

const FaqPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.pageIntroContainer}>
        <div className={styles.container2}>
          <div className={styles.left}>
            <p className={styles.copy}>
              We&#39;re here to address your queries and provide clarity on the
              intricacies of our services. Whether you&#39;re curious about our
              process, pricing, or the technologies we employ, you&#39;ll find
              comprehensive answers here. Explore the questions below to uncover
              valuable insights into how we can transform your online presence.
            </p>
          </div>
          <div className={styles.right}>
            <div className={styles.top}>
              <div className={styles.rightLeft}>
                <Image
                  src={img1}
                  alt='hello'
                  title='hello'
                  fill
                  className={styles.img}
                />
              </div>
              <div className={styles.rightRight}>
                <Image
                  src={img1}
                  alt='hello'
                  title='hello'
                  fill
                  className={styles.img3}
                />
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.bottomLeft}>
                <h1 className={styles.heading}>
                  Frequently <br /> asked <br />
                  questions
                </h1>
              </div>
              <div className={styles.bottomRight}>
                <Image
                  src={img1}
                  alt='hello'
                  title='hello'
                  fill
                  className={styles.img2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AllFaq />
      <BlogSection />
      <FinalCta />
      <ContactSection />
    </section>
  );
};
export default FaqPage;
