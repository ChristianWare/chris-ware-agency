import BlogSection from "../components/BlogSection/BlogSection";
import ContactSection from "../components/ContactSection/ContactSection";
import Faq from "../components/Faq/Faq";
import FinalCta from "../components/FinalCta/FinalCta";
import PageIntro from "../components/PageIntro/PageIntro";
import Pricing from "../components/Pricing/Pricing";
import styles from "./Pricing.module.css";

const PricingPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.pageIntroContainer}>
        <PageIntro
          label='Pricing'
          heading='pricing that makes sense'
          copy='At the Chris Ware Agency, we understand that affordability is key without compromising quality. This is why our pricing options start at only $150 per month. They are designed to accommodate your budget, ensuring that you can access exceptional web solutions tailored to your needs. We believe in empowering businesses to thrive digitally, and that starts with offering straightforward pricing that aligns with your goals. Explore our pricing plans below and take the first step towards transforming your digital presence.'
        />
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
