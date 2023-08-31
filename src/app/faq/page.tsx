import Image from "next/image";
import AllFaq from "../components/AllFaqs/AllFaq";
import BlogSection from "../components/BlogSection/BlogSection";
import ContactSection from "../components/ContactSection/ContactSection";
import FinalCta from "../components/FinalCta/FinalCta";
import styles from "./Faq.module.css";
import img1 from "../../../public/images/collab3.png";
import { Post } from "../lib/interface";
import { client } from "../lib/sanity";
import PageIntro from "../components/PageIntro/PageIntro";

async function getData() {
  const query = `*[_type == 'post']`;
  const data = await client.fetch(query);
  return data;
}

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function FaqPage() {
    const data = (await getData()) as Post[];

  return (
    <section className={styles.container}>
      <PageIntro
        heading='Frequently Asked Questions'
        copy='We&#39;re here to address your queries and provide clarity on the
              intricacies of our services. Whether you&#39;re curious about our
              process, pricing, or the technologies we employ, you&#39;ll find
              comprehensive answers here. Explore the questions below to uncover
              valuable insights into how we can transform your online presence.'
        src1={img1}
        src2={img1}
        src3={img1}
        src4={img1}
      />

      <AllFaq />
      <BlogSection posts={data} />
      <FinalCta />
      <ContactSection />
    </section>
  );
}
