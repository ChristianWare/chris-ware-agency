import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Process from "./components/Process/Process";
import Pricing from "./components/Pricing/Pricing";
import BlogSection from "./components/BlogSection/BlogSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Faq from "./components/Faq/Faq";
import FinalCta from "./components/FinalCta/FinalCta";
import Q1 from "./components/q1/Q1";
import Q2 from "./components/q2/Q2";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Process />
      <Pricing />
      <Faq />
      <BlogSection />
      <FinalCta />
      <ContactSection />
    </main>
  );
}
