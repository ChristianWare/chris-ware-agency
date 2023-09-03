import styles from "./ContactPage.module.css";
import BlogSection from "../components/BlogSection/BlogSection";
import ContactSection from "../components/ContactSection/ContactSection";
import FinalCta from "../components/FinalCta/FinalCta";
import img1 from "../../../public/images/contact1.png";
import img2 from "../../../public/images/contact2.png";
import img3 from "../../../public/images/contact3.png";
import img4 from "../../../public/images/contact4.png";
import PageIntro from "../components/PageIntro/PageIntro";


export default async function ContactPage() {
  return (
    <section className={styles.container}>
      <div className={styles.pageIntroContainer}>
        <PageIntro
          heading='Contact Us'
          copy='We&#39;re excited to connect with you! Whether you&#39;re ready to embark on a new project, have questions about our services, or simply want to discuss your digital aspirations, we&#39;re here to listen. At the Chris Ware Agency, we value every opportunity to collaborate and create. Let&#39;s start a conversation that leads to exceptional online experiences. Reach out to us using the contact details below, and let&#39;s begin shaping your digital success story together.'
          src1={img1}
          src2={img2}
          src3={img3}
          src4={img4}
          labelText='Contact'
        />
      </div>
      <ContactSection />
      {/* <BlogSection posts={data} /> */}
      <FinalCta />
    </section>
  );
}
