import Image from "next/image";
import AllServices from "../components/AllServices/AllServices";
import BlogSection from "../components/BlogSection/BlogSection";
import ContactSection from "../components/ContactSection/ContactSection";
import Faq from "../components/Faq/Faq";
import FinalCta from "../components/FinalCta/FinalCta";
import Pricing from "../components/Pricing/Pricing";
import Process2 from "../components/Process2/Process2";
import styles from "./Services.module.css";
import img1 from "../../../public/images/affordable.png";
import img2 from "../../../public/images/code.png";
import img3 from "../../../public/images/creative.png";

const ServicesPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.pageIntroContainer}>
        <div className={styles.container2}>
          <div className={styles.left}>
            <p className={styles.copy}>
              Whether you&#39;re looking for captivating website designs,
              seamless e-commerce integration, robust web applications, or
              effective digital marketing strategies, we&#39;ve got you covered.
              With a keen understanding of the ever-evolving digital landscape,
              we combine cutting-edge technologies with innovative design
              approaches to create experiences that resonate with your target
              audience.
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
                <h1 className={styles.heading}>
                  Our <br />
                  Services
                  <br /> Explained
                </h1>
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
                <Image
                  src={img3}
                  alt='hello'
                  title='hello'
                  fill
                  className={styles.img3}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AllServices />
      <Process2 />
      <Pricing />
      <Faq />
      <BlogSection />
      <FinalCta />
      <ContactSection />
    </section>
  );
};
export default ServicesPage;
