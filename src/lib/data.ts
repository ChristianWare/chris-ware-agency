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
    title: "Project One",
    description:
      "This is a description of a website that I built. I came out very well, and the owners were very satisfied with the final result.",
    src: Taco,
  },
  {
    id: 5,
    title: "Project Two",
    description:
      "This is a description of a website that I built. I came out very well, and the owners were very satisfied with the final result.",
    src: Drone,
  },
  {
    id: 6,
    title: "Project Three",
    description:
      "This is a description of a website that I built. I came out very well, and the owners were very satisfied with the final result.",
    src: Fonts,
  },
];
