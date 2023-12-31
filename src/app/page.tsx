import styles from "./page.module.css";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import About from "../components/About/AboutSection";
import Portfolio from "../components/Portfolio/Portfolio";
import Testimonials from "../components/Testimonials/Testimonials";
import Process from "../components/Process/Process";
import Pricing from "../components/Pricing/Pricing";
import BlogSection from "../components/BlogSection/BlogSection";
import Faq from "../components/Faq/Faq";
import FinalCta from "../components/FinalCta/FinalCta";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Challenge from "@/components/Challenge/Challenge";
import Solutions from "@/components/Solutions/Solutions";
import ContactSection from "@/components/ContactSection/ContactSection";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Chris Ware Agency",
  image: "/images/hero4.png",
  description:
    "Description Here Description Here Description Here Description Here",
};

export default async function Home() {
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

// Determine the correct path to the 'blogs' directory
const blogsDirectory = path.join(process.cwd(), "blogs");

// Use readdirSync to list files in the 'blogs' directory
const files = fs.readdirSync(blogsDirectory);

const blogs = files.map((filename: any) => {
  const fileContent = fs.readFileSync(
    path.join(blogsDirectory, filename),
    "utf-8"
  );

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
      <Challenge />
      <Solutions />
      <Services />
      <Portfolio />
      <Process />
      <Pricing />
      <About />
      <Faq />
      <ContactSection />
      {/* <BlogSection blogData={blogs} /> */}
      {/* <Testimonials /> */}
      {/* 
      <FinalCta /> */}
    </main>
  );
}
