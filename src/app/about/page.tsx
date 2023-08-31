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
import PageIntro from "../components/PageIntro/PageIntro";

async function getData() {
  const query = `*[_type == 'post']`;
  const data = await client.fetch(query);
  return data;
}

export const revalidate = 60;

export default async function AboutPage() {
  const data = (await getData()) as Post[];
  return (
    <section className={styles.container}>
      <PageIntro
        heading='About Us'
        copy='Our journey is rooted in a passion for crafting captivating
              websites that transcend mere functionality. We embark on a mission
              to transform ideas into pixel-perfect realities. From sleek and
              responsive designs to seamless user interactions, we infuse every
              project with a blend of cutting-edge technology and artistic
              flair. Join us as we unfold our story, driven by a commitment to
              redefine the digital landscape and empower businesses through
              unparalleled web solutions.'
        src1={img1}
        src2={img1}
        src3={img1}
        src4={img1}
        labelText='About'
      />
      <Reasons />
      <CompanyCulture />
      <Team />
      <Faq />
      <BlogSection posts={data} />
      <FinalCta />
      <ContactSection />
    </section>
  );
}
