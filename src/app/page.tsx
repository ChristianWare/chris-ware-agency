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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Chris Ware Agency",
  image: "/images/hero4.png",
  description:
    "Description Here Description Here Description Here Description Here",
};


export default async function Home() {
  return (
    <main>
      <script
        key='schema-jsonld'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd, null, "\t"),
        }}
      />
      <Hero />
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
