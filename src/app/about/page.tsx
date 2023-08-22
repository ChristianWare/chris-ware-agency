import BlogSection from "../components/BlogSection/BlogSection";
import CompanyCulture from "../components/CompanyCulture/CompanyCulture";
import ContactSection from "../components/ContactSection/ContactSection";
import Faq from "../components/Faq/Faq";
import FinalCta from "../components/FinalCta/FinalCta";
import PageIntro from "../components/PageIntro/PageIntro";
import Reasons from "../components/Reasons/Reasons";
import Team from "../components/Team/Team";
import styles from "./About.module.css";

const AboutPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.pageIntroContainer}>
        <PageIntro
          label='About Us'
          heading='About the Chris Ware Agency'
          copy='Our journey is rooted in a passion for crafting captivating websites that transcend mere functionality. We embark on a mission to transform ideas into pixel-perfect realities. From sleek and responsive designs to seamless user interactions, we infuse every project with a blend of cutting-edge technology and artistic flair. Join us as we unfold our story, driven by a commitment to redefine the digital landscape and empower businesses through unparalleled web solutions.'
        />
      </div>
      <Reasons />
      <CompanyCulture />
      <Team />
      <Faq />
      <BlogSection />
      <FinalCta />
      <ContactSection />
    </section>
  );
};
export default AboutPage;
