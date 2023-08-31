import Image from "next/image";
import BlogSection from "../components/BlogSection/BlogSection";
import ContactSection from "../components/ContactSection/ContactSection";
import Faq from "../components/Faq/Faq";
import FinalCta from "../components/FinalCta/FinalCta";
import Pricing from "../components/Pricing/Pricing";
import styles from "./Pricing.module.css";
import img1 from "../../../public/images/affordable.png";
import { Post } from "../lib/interface";
import { client } from "../lib/sanity";

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
                <Image
                  src={img1}
                  alt='hello'
                  title='hello'
                  fill
                  className={styles.img2}
                />
              </div>
              <div className={styles.bottomRight}>
                <h1 className={styles.heading}>
                  Our <br /> low <br /> prices
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pricing />
      <Faq />
      <BlogSection posts={data} />
      <FinalCta />
      <ContactSection />
    </section>
  );
}
