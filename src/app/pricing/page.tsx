import BlogSection from "../components/BlogSection/BlogSection";
import ContactSection from "../components/ContactSection/ContactSection";
import Faq from "../components/Faq/Faq";
import FinalCta from "../components/FinalCta/FinalCta";
import Pricing from "../components/Pricing/Pricing";
import styles from "./Pricing.module.css";
import img1 from "../../../public/images/affordable.png";
import { Post } from "../lib/interface";
import { client } from "../lib/sanity";
import PageIntro from "../components/PageIntro/PageIntro";

async function getData() {
  const query = `*[_type == 'post']`;
  const data = await client.fetch(query);
  return data;
}

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function PricingPage() {
  const data = (await getData()) as Post[];

  return (
    <section className={styles.container}>
      <PageIntro
        heading='Our Prices'
        copy='At the Chris Ware Agency, we understand that affordability is key
              without compromising quality. This is why our pricing options
              start at only $150 per month. They are designed to accommodate
              your budget, ensuring that you can access exceptional web
              solutions tailored to your needs.'
        src1={img1}
        src2={img1}
        src3={img1}
        src4={img1}
        labelText='Pricing'
      />
      <Pricing />
      <Faq />
      <BlogSection posts={data} />
      <FinalCta />
      <ContactSection />
    </section>
  );
}
