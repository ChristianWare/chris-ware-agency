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
import { client } from "./lib/sanity";
import { Post } from "./lib/interface";

async function getData() {
  const query = `*[_type == 'post']`;
  const data = await client.fetch(query);
  return data;
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Chris Ware Agency",
  image: "/images/hero4.png",
  description:
    "Description Here Description Here Description Here Description Here",
};

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function Home() {
  const data = (await getData()) as Post[];
  console.log(data);
  return (
    <main>
      <script
        key='schema-jsonld'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd, null, "\t"),
        }}
      />
      {/* <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Process />
      <Pricing />
      <Faq /> */}

      <BlogSection posts={data} />
      <FinalCta />
    </main>
  );
}
