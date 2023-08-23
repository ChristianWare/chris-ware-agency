import Image from "next/image";
import BlogSection from "../components/BlogSection/BlogSection";
import ContactSection from "../components/ContactSection/ContactSection";
import Faq from "../components/Faq/Faq";
import FinalCta from "../components/FinalCta/FinalCta";
import Pricing from "../components/Pricing/Pricing";
import styles from "./Pricing.module.css";
import img1 from "../../../public/images/affordable.png";
import img2 from "../../../public/images/code.png";
import img3 from "../../../public/images/creative.png";

const PricingPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.pageIntroContainer}>
        <div className={styles.container2}>
          <div className={styles.left}>
            <p className={styles.copy}>
              At the Chris Ware Agency, we understand that affordability is key
              without compromising quality. This is why our pricing options
              start at only $150 per month. They are designed to accommodate
              your budget, ensuring that you can access exceptional web
              solutions tailored to your needs. 
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
                  src={img3}
                  alt='hello'
                  title='hello'
                  fill
                  className={styles.img3}
                />
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.bottomLeft}>
                <Image
                  src={img2}
                  alt='hello'
                  title='hello'
                  fill
                  className={styles.img2}
                />
              </div>
              <div className={styles.bottomRight}>
                <h1 className={styles.heading}>
                  Our  <br /> Prices <br /> Explained
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pricing />
      <Faq />
      <BlogSection />
      <FinalCta />
      <ContactSection />
    </section>
  );
};
export default PricingPage;
