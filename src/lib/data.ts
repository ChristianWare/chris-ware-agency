import Webdesign from "../../public/icons/webdesign.png";
import Analytics from "../../public/icons/an.png";
import Landing from "../../public/icons/landing.png";
import Market from "../../public/icons/market.png";
import Research from "../../public/icons/research.png";
import SEO from "../../public/icons/seo.png";
import Fe from "../../public/icons/fe.png";
import Be from "../../public/icons/be.png";
import Bolt from "../../public/icons/bolt.png";
import Blog from "../../public/icons/blog.png";
import Taco from "../../public/images/livemas.png";
import Fonts from "../../public/images/48laws.png";
import Drone from "../../public/images/drone.png";
import Person from "../../public/icons/person.png";
import Access from "../../public/icons/access.png";
import Responsive from "../../public/icons/responsive.png";
import SEOFeature from "../../public/icons/seoFeature.png";
import Speed from "../../public/icons/speed.png";

export const servicesSection = [
  {
    id: 1,
    sectionTitle: "What We Build",
    services: [
      {
        id: 1.1,
        icon: Market,
        service: "Marketing Websites",
        description:
          "We build you dynamic and engaging marketing websites that not only showcase your brand but also drive results. ",
      },
      {
        id: 1.2,
        icon: Webdesign,
        service: "E-Commerce",
        description:
          "Empower your online business with our expertly crafted E-Commerce websites designed for seamless shopping experiences and maximum conversion.",
      },
      {
        id: 1.3,
        icon: Landing,
        service: "Landing Pages",
        description:
          "Elevate your campaign's impact with our precision-engineered landing page sites optimized for conversion and engagement.",
      },
      {
        id: 1.4,
        icon: Blog,
        service: "Blogs",
        description:
          "Unlock your voice and reach with our bespoke blog sites, tailored for captivating content delivery and audience connection.",
      },
    ],
  },
  {
    id: 2,
    sectionTitle: "SEO Services",
    services: [
      {
        id: 2.1,
        icon: SEO,
        service: "SEO Audits",
        description:
          "Uncover your website's full potential with our comprehensive SEO audits, revealing actionable insights for enhanced online visibility.",
      },
      {
        id: 2.2,
        icon: Research,
        service: "Keyword Research",
        description:
          "Fuel your online success with our strategic keyword research, driving targeted traffic and boosting search rankings.",
      },
      {
        id: 2.3,
        icon: Analytics,
        service: "Analytics and Reporting",
        description:
          "Transform your data into insights with our website analytics and reporting services, guiding informed decisions for digital growth.",
      },
    ],
  },
  {
    id: 3,
    sectionTitle: "Development Services",
    services: [
      {
        id: 3.1,
        icon: Be,
        service: "Backend Development",
        description:
          "Power your website with robust functionality and performance through our expert backend development solutions.",
      },
      {
        id: 3.2,
        icon: Fe,
        service: "Frontend Development",
        description:
          "Elevate user experiences and design with our cutting-edge frontend development services, creating visually stunning and intuitive websites.",
      },
      {
        id: 3.3,
        icon: Bolt,
        service: "Page Speed Optimization",
        description:
          "Accelerate your online success with our page speed optimization services, ensuring faster loading times and superior user experiences.",
      },
    ],
  },
] as const;

export const portfolio = [
  {
    id: 4,
    title: "Taco Bell",
    description:
      "This is a description of a website that I built. I came out very well, and the owners were very satisfied with the final result.",
    src: Taco,
  },
  {
    id: 5,
    title: "Dronopoly",
    description:
      "This is a description of a website that I built. I came out very well, and the owners were very satisfied with the final result.",
    src: Drone,
  },
  {
    id: 6,
    title: "48 Laws of power",
    description:
      "This is a description of a website that I built. I came out very well, and the owners were very satisfied with the final result.",
    src: Fonts,
  },
] as const;

export const reviews = [
  {
    id: 7,
    review:
      "Astounding work! Their team took my vague ideas and turned them into a sleek, functional website that perfectly represents my brand.",
    reviewer: "Sarah K.",
    company: "TikTok",
    person: Person,
  },
  {
    id: 8,
    review:
      "I was amazed by their attention to detail and commitment to delivering beyond my expectations. My website now stands out, thanks to their expertise.",
    reviewer: "Alex M.",
    company: "Disney",
    person: Person,
  },
  {
    id: 9,
    review:
      "Incredible results! From the initial concept to the final execution, their web development prowess transformed our online presence.",
    reviewer: "Jessica R.",
    company: "NBA",
    person: Person,
  },
  {
    id: 10,
    review:
      "Working with them was a breeze. They understood our requirements and delivered a user-friendly website that exceeded our hopes.",
    reviewer: "Mark T.",
    company: "Pendant",
    person: Person,
  },
  {
    id: 11,
    review:
      "Fast, responsive, and creative. Our website's revamp was flawlessly executed, showcasing their dedication to quality and innovation.",
    reviewer: "Emily H.",
    company: "Meta",
    person: Person,
  },
  {
    id: 12,
    review:
      "Impressed by the seamless process they provided. Our e-commerce platform is now a smooth experience for customers, driving sales.",
    reviewer: "David T.",
    company: "TikTok,",
    person: Person,
  },
  {
    id: 13,
    review:
      "A game-changer for my business! Their intuitive design and functionality enhancements elevated our brand and user engagement.",
    reviewer: "Billy V.",
    company: "Transit",
    person: Person,
  },
  {
    id: 14,
    review:
      "Exemplary collaboration and communication throughout the project. They transformed our vision into an interactive website that captivates visitors.",
    reviewer: "Lisa S.",
    company: "NBC",
    person: Person,
  },
] as const;

export const features = [
  {
    id: 15,
    icon: Responsive,
    feature: "Responsive",
    description:
      "We create responsive websites that adapt to all devices and screens, ensuring optimal display on desktops, laptops, tablets, smartphones, and smart TVs. Our design scales elements to fit various screen sizes, guaranteeing your website looks great on any device.",
  },
  {
    id: 15,
    icon: Access,
    feature: "Accessible",
    description:
      "Our websites are designed for accessibility, ensuring inclusivity for people with disabilities. We create sites that are easily navigable and interactive, particularly for screen reader users. Web accessibility is crucial for equal access and opportunity for all abilities.",
  },
  {
    id: 15,
    icon: SEOFeature,
    feature: "Search Engine Optimized",
    description:
      "SEO, or Search Engine Optimization, enhances a website's technical setup for easy discoverability. This elevates credibility, drives more traffic, and enhances online visibility.",
  },
  {
    id: 15,
    icon: Speed,
    feature: "Page Speed Optimized",
    description:
      "Website optimization boosts traffic and conversions, delivering a superior user experience. Our sites load in under 3 seconds for optimal performance.",
  },
] as const;