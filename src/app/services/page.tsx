import AllServices from "../components/AllServices/AllServices";
import BlogSection from "../components/BlogSection/BlogSection";
import ContactSection from "../components/ContactSection/ContactSection";
import Faq from "../components/Faq/Faq";
import FinalCta from "../components/FinalCta/FinalCta";
import Pricing from "../components/Pricing/Pricing";
import Process2 from "../components/Process2/Process2";
import styles from "./Services.module.css";
import img1 from "../../../public/images/collab1.png";
import { Post } from "../lib/interface";
import { client } from "../lib/sanity";
import PageIntro from "../components/PageIntro/PageIntro";

async function getData() {
  const query = `*[_type == 'post']`;
  const data = await client.fetch(query);
  return data;
}

export const revalidate = 60;

export default async function ServicesPage() {
  const data = (await getData()) as Post[];

  return (
    <section className={styles.container}>
      <PageIntro
        heading='Our Services'
        copy='Whether you&#39;re looking for captivating website designs,
              seamless e-commerce integration, robust web applications, or
              effective digital marketing strategies, we&#39;ve got you covered.
              With a keen understanding of the ever-evolving digital landscape,
              we combine cutting-edge technologies with innovative design
              approaches to create experiences that resonate with your target
              audience.'
        src1={img1}
        src2={img1}
        src3={img1}
        src4={img1}
      />
      <AllServices />
      <Process2 />
      <Pricing />
      <Faq />
      <BlogSection posts={data} />
      <FinalCta />
      <ContactSection />
    </section>
  );
}
