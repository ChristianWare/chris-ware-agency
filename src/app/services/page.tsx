import AllServices from "../components/AllServices/AllServices";
import ContactSection from "../components/ContactSection/ContactSection";
import Faq from "../components/Faq/Faq";
import FinalCta from "../components/FinalCta/FinalCta";
import PageIntro from "../components/PageIntro/PageIntro";
import Pricing from "../components/Pricing/Pricing";
import Process2 from "../components/Process2/Process2";
import styles from "./Services.module.css";

const ServicesPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.pageIntroContainer}>
        <PageIntro
          label='Services'
          heading='Discover Our Comprehensive Web Services'
          copy='Whether you&#39;re looking for captivating website designs, seamless e-commerce integration, robust web applications, or effective digital marketing strategies, we&#39;ve got you covered. With a keen understanding of the ever-evolving digital landscape, we combine cutting-edge technologies with innovative design approaches to create experiences that resonate with your target audience.'
        />
      </div>
      <AllServices />
      <Process2 />
      <Pricing />
      <Faq />
      <FinalCta />
      <ContactSection />
    </section>
  );
};
export default ServicesPage;
