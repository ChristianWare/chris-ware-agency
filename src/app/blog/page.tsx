import BlogSection from "../components/BlogSection/BlogSection";
import FinalCta from "../components/FinalCta/FinalCta";
import PageIntro from "../components/PageIntro/PageIntro";
import styles from "./blogPage.module.css";
import img1 from "../../../public/images/blog1.png";
import img2 from "../../../public/images/blog2.png";
import img3 from "../../../public/images/blog3.png";
import img4 from "../../../public/images/blog4.png";
import { Post } from "../lib/interface";
import { client } from "../lib/sanity";

async function getData() {
  const query = `*[_type == 'post']`;
  const data = await client.fetch(query);
  return data;
}

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function BlogPage() {
  const data = (await getData()) as Post[];
  return (
    <section className={styles.container}>
      <div className={styles.pageIntroContainer}>
        <PageIntro
          heading='Blog'
          copy='Welcome to our vibrant corner of the digital world, where ideas, insights, and innovation converge. The Chris Ware Agency Blog is a reservoir of industry knowledge, trends, and expert perspectives that aim to inspire and inform. Dive into our collection of articles crafted by our seasoned team of developers, designers, and strategists. Whether you&#39;re seeking guidance on the latest web technologies, design trends, or digital strategies, our blog is your resource for staying ahead in the dynamic landscape of web development. Join us on this journey of continuous learning and exploration.'
          src1={img1}
          src2={img2}
          src3={img3}
          src4={img4}
          labelText='Blog'
        />
      </div>
      <BlogSection posts={data} />
      <FinalCta />
    </section>
  );
}
