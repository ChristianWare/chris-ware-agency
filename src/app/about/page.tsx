import Image from "next/image";
import BlogSection from "../components/BlogSection/BlogSection";
import CompanyCulture from "../components/CompanyCulture/CompanyCulture";
import ContactSection from "../components/ContactSection/ContactSection";
import Faq from "../components/Faq/Faq";
import FinalCta from "../components/FinalCta/FinalCta";
import Reasons from "../components/Reasons/Reasons";
import Team from "../components/Team/Team";
import styles from "./About.module.css";
import img1 from "../../../public/images/hero4.png";
import { Post } from "../lib/interface";
import { client } from "../lib/sanity";

async function getData() {
  const query = `*[_type == 'post']`;
  const data = await client.fetch(query);
  return data;
}

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function AboutPage() {
  const data = (await getData()) as Post[];
  return (
    <section className={styles.container}>
      <div className={styles.pageIntroContainer}>
        <div className={styles.container2}>
          <div className={styles.left}>
            <p className={styles.copy}>
              Our journey is rooted in a passion for crafting captivating
              websites that transcend mere functionality. We embark on a mission
              to transform ideas into pixel-perfect realities. From sleek and
              responsive designs to seamless user interactions, we infuse every
              project with a blend of cutting-edge technology and artistic
              flair. Join us as we unfold our story, driven by a commitment to
              redefine the digital landscape and empower businesses through
              unparalleled web solutions.
            </p>
          </div>
          <div className={styles.right}>
            <div className={styles.top}>
              <div className={styles.rightLeft}>
                <h1 className={styles.heading}>
                  About <br /> our <br /> agency
                </h1>
              </div>
              <div className={styles.rightRight}>
                <Image
                  src={img1}
                  alt='hello'
                  title='hello'
                  fill
                  className={styles.img}
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
                <Image
                  src={img1}
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
      <Reasons />
      <CompanyCulture />
      <Team />
      <Faq />
      <BlogSection posts={data} />
      <FinalCta />
    </section>
  );
}
