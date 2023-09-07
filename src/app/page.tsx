import styles from './page.module.css'
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Process from "./components/Process/Process";
import Pricing from "./components/Pricing/Pricing";
import BlogSection from "./components/BlogSection/BlogSection";
import Faq from "./components/Faq/Faq";
import FinalCta from "./components/FinalCta/FinalCta";

import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Chris Ware Agency",
  image: "/images/hero4.png",
  description:
    "Description Here Description Here Description Here Description Here",
};

export default async function Home() {
  const blogDir = "blogs"; // what goes in quotation marks in the name of the file that you created in the root directory to hold all of the mdx files you created.

  const files = fs.readdirSync(path.join(blogDir));

  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");

    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });

  return (
    <main className={styles.container}>
      <script
        key='schema-jsonld'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd, null, "\t"),
        }}
      />
      <Hero />
      {/* {blogs.map((x, index) => (
        <div key={index}>
          <h4>{x.meta.title}</h4>
          <h4>{x.meta.date}</h4>
          <p>{x.meta.description}</p>
        </div>
      ))} */}
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <Process />
      <Pricing />
      <Faq />
      {/* <BlogSection posts={data} /> */}
      <FinalCta />
      
    </main>
  );
}
