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
import Nier from "../../public/images/nier.png";
import Person from "../../public/icons/person.png";
import Access from "../../public/icons/access.png";
import Responsive from "../../public/icons/responsive.png";
import SEOFeature from "../../public/icons/seoFeature.png";
import Speed from "../../public/icons/speed.png";
import Discover from "../../public/images/discovery.png";
import ResearchProcess from "../../public/images/research.png";
import Design from "../../public/images/design.png";
import Review from "../../public/images/review.png";
import Develop from "../../public/images/develop.png";
import Deploy from "../../public/images/deploy.png";
import Success from "../../public/images/success.png";

export const servicesSection = [
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
    id: 1.4,
    icon: Blog,
    service: "Blogs",
    description:
      "Unlock your voice and reach with our bespoke blog sites, tailored for captivating content delivery and audience connection.",
  },
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
] as const;

export const portfolio = [
  {
    id: 6,
    client: "Nier Transportation",
    clientDesc:
      "A balck car service company offering rides througout the Phonenix Metro area since 2004. In this project I prioritized a user-friendly experience and a modern aesthetic.",
    href: "https://www.niertransportation.com/",
    src: Nier,
  },
  {
    id: 4,
    client: "Taco Bell",
    clientDesc:
      "A fast-food chain known for its  tacos, burritos, quesadillas, and various other Mexican-inspired dishes. In this project I prioritized a user-friendly experience and a modern aesthetic.",
    href: "https://livemas.io/",
    src: Taco,
  },
  // {
  //   id: 5,
  //   client: "Dronopoly",
  //   clientDesc:
  //     "A fast-food chain known for its  tacos, burritos, quesadillas, and various other Mexican-inspired dishes.",
  //   projectDetails:
  //     "In this project I prioritized a user-friendly experience and a modern aesthetic.",
  //   results:
  //     "A visually appealing and highly functional website that reflects Taco Bell's brand identity.",
  //   href: "https://dronopoly.com/",
  //   src: Nier,
  // },
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
    id: 16,
    icon: Access,
    feature: "Accessible",
    description:
      "Our websites are designed for accessibility, ensuring inclusivity for people with disabilities. We create sites that are easily navigable and interactive, particularly for screen reader users. Web accessibility is crucial for equal access and opportunity for all abilities.",
  },
  {
    id: 17,
    icon: SEOFeature,
    feature: "Search Engine Optimized",
    description:
      "SEO, or Search Engine Optimization, enhances a website's technical setup for easy discoverability. This elevates credibility, drives more traffic, and enhances online visibility.",
  },
  {
    id: 18,
    icon: Speed,
    feature: "Page Speed Optimized",
    description:
      "Website optimization boosts traffic and conversions, delivering a superior user experience. Our sites load in under 3 seconds for optimal performance.",
  },
] as const;

export const process = [
  {
    id: 19,
    processName: "1. Discovery Call",
    processDescription:
      "We initiate a mutual understanding, fostering stronger rapport. Through this, we ascertain the most effective ways to fulfill your website aspirations and objectives.",
    src: Discover,
    flip: "flip",
  },
  {
    id: 20,
    processName: "2. Research",
    processDescription:
      "Analyzing the provided information, we delve into researching your industry and competitive landscape. This comprehensive approach aids us in devising an optimal online promotion strategy tailored to enhance your business presence.",
    src: ResearchProcess,
    flip: "",
  },
  {
    id: 21,
    processName: "3. Design",
    processDescription:
      "Once the research phase concludes, we transition into the design stage for your website. Our designs seamlessly align with your website's overarching theme and atmosphere. Presenting you with several initial low-fidelity design options, we await your choice for us to proceed with building your preferred design in the subsequent phase.",
    src: Design,
    flip: "flip",
  },
  {
    id: 22,
    processName: "4. Develop",
    processDescription:
      "After gathering the insights shared during the interview and the design you've selected, we embark on transforming it into reality. We meticulously craft every element from scratch, employing pure code rather than relying on platforms like Wordpress or similar tools. This approach guarantees a swift, mobile-responsive website that excels in Google rankings.",
    src: Develop,
    flip: "",
  },
  {
    id: 23,
    processName: "5. Review",
    processDescription:
      "Upon completion, we will engage in a joint review of the developed website, facilitating open discussions for any desired refinements. This collaborative process ensures that the final product aligns precisely with your vision and requirements.",
    src: Review,
    flip: "flip",
  },
  {
    id: 24,
    processName: "6. Deployment",
    processDescription:
      "After receiving your approval on all aspects, we will proceed to deploy the website for public access, ensuring a seamless and successful launch that reflects your vision. Our meticulous process guarantees that your website is presented to the world in its finest form.",
    src: Deploy,
    flip: "",
  },
  {
    id: 25,
    processName: "Final Result: Your Success",
    processDescription:
      "Following the successful completion of the website, now you're beaming with satisfaction. More people have discovered your business online, helping it grow and succeed even more.",
    src: Success,
    flip: "flip",
  },
] as const;

export const pricing = [
  {
    id: 26,
    plan: "Marketing",
    description:
      "Attract potential customers to generate leads and drive sales",
    price: 175,
    includes: [
      {
        id: 26.1,
        feature: "5 page website",
      },
      {
        id: 26.2,
        feature: "Unlimited edits",
      },
      {
        id: 26.3,
        feature: "Includes hosting",
      },
      {
        id: 27.3,
        feature: "6 blog articles",
      },
    ],
    btnType: "primary",
  },
  {
    id: 27,
    plan: "E-Commerce",
    description: "Your own customized online store to sell products & services",
    price: 275,
    includes: [
      {
        id: 26.1,
        feature: "Everything in Marketing, plus:",
      },
      {
        id: 26.2,
        feature: "Online store",
      },
      {
        id: 26.3,
        feature: "Admin Dashboard",
      },
      {
        id: 27.3,
        feature: "Payment Setup",
      },
    ],
    btnType: "secondary",
  },
  {
    id: 28,
    plan: "Custom Plan",
    description:
      "A website tailored to your specific wants & needs to suit your business",
    price: "Price",
    includes: [
      {
        id: 28.1,
        feature: "Price dependent on:",
      },
      {
        id: 28.2,
        feature: "Number of add'll pages",
      },
      {
        id: 28.3,
        feature: "Scope of Work",
      },
      {
        id: 28.3,
        feature: "Time involved",
      },
    ],
    btnType: "tertiary",
  },
] as const;

export const about = [
  {
    id: 29,
    title:
      "Dedicated to merging advanced technologies and creative design for website development",
  },
  {
    id: 30,
    title:
      "Focus on surpassing client expectations and fulfilling their specific requirements",
  },
  {
    id: 31,
    title: "Strong commitment to ongoing learning and self-improvement",
  },
  {
    id: 32,
    title: "Adept at paying meticulous attention to detail in all projects",
  },
  {
    id: 33,
    title: "Enthusiastic about bringing web projects to life",
  },
  {
    id: 34,
    title:
      "Striving to craft digital solutions that make a significant and enduring impression",
  },
  {
    id: 35,
    title:
      "Expertise in combining innovation with design for impactful web experiences",
  },
] as const;

export const faqs = [
  {
    id: 36,
    question: "What types of websites do you specialize in creating?",
    answer:
      "We specialize in developing custom websites for small businesses across various industries, including e-commerce, service-based, portfolio, and informational websites.",
  },
  {
    id: 37,
    question: "How long does it typically take to build a website?",
    answer:
      "The timeline can vary based on the complexity of the project. On average, a small business website takes around 2 to 4 weeks from initial concept to launch.",
  },

  {
    id: 39,
    question: "Can you design a website that matches my brand's identity?",
    answer:
      " Absolutely! We'll work closely with you to ensure your website's design aligns with your brand's colors, logo, and overall identity to create a cohesive online presence.",
  },
  {
    id: 40,
    question: "Will my website be mobile-friendly and responsive?",
    answer:
      "Yes, all websites we develop are mobile-friendly and responsive. We prioritize delivering an optimal user experience on various devices and screen sizes.",
  },

  {
    id: 42,
    question: "Do you offer website maintenance and support?",
    answer:
      "Yes, we offer ongoing maintenance and support packages to ensure your website remains up-to-date, secure, and functioning optimally after launch.",
  },
  {
    id: 43,
    question: "Will my website be search engine friendly?",
    answer:
      "Absolutely, we follow best practices for on-page SEO during development, helping your website rank well on search engines and driving organic traffic.",
  },
  {
    id: 44,
    question: "Can you integrate e-commerce functionality into my website?",
    answer:
      "Yes, we can incorporate e-commerce features, allowing you to sell products or services directly from your website, complete with Stripe, a secure payment gateway.",
  },
  {
    id: 45,
    question: "What's the process for getting started on my project?",
    answer:
      "To get started, simply reach out to us via our contact form or phone. We'll schedule a consultation to discuss your goals, needs, and provide you with a tailored plan and estimate for your project.",
  },
  {
    id: 46,
    question:
      "Can you assist with transferring my existing domain name to your hosting service?",
    answer:
      "Absolutely, we can guide you through the process of transferring your domain name to our hosting service. We'll ensure a smooth transition so that your website remains accessible with minimal downtime during the switch.",
  },
] as const;

export const challenges = [
  {
    id: 47,
    title: "No Inquires",
    description:
      "Are very few people calling about your website, making you question the point of even having one?",
  },
  {
    id: 48,
    title: "Outdated Design",
    description:
      "Is your website confusing and outdated? And does the design works against your image instead of for it?",
  },
  {
    id: 49,
    title: "Inadequate",
    description:
      "Is the quality and added value of your products and services not reflected in your website?",
  },
  {
    id: 50,
    title: "Time Consuming",
    description:
      "Are you frustrated with the maintenance and management of your website due to its excessive time consumption?",
  },
  {
    id: 51,
    title: "Cookie Cutter",
    description:
      "Does your website look like others and fail to make a lasting impression on your customers?",
  },
  {
    id: 52,
    title: "Low Ranking",
    description:
      "Is your website impossible to find on Google because it ranks way too low, and is somewhere on page 15?",
  },
] as const;

export const solutions = [
  {
    id: 53,
    src: SEO,
    title: "More Inquireies",
    description:
      "Your website attracts new customers and they trust your products and services as a top solution.",
  },
  {
    id: 54,
    src: SEO,
    title: "Inspiring Design",
    description:
      "The design of your website inspires and you stay in the minds of your customers.",
  },
  {
    id: 55,
    src: SEO,
    title: "Professional identity",
    description:
      "You will be perceived by your visitors as trustworthy and professional.",
  },
  {
    id: 56,
    src: SEO,
    title: "Authentic appearance",
    description:
      "You can identify with your website and are happy to share the link with potential customers.",
  },
  {
    id: 57,
    src: SEO,
    title: "Stress-free management",
    description:
      "Change or expand your content effortlessly, without technical know-how.",
  },
  {
    id: 58,
    src: SEO,
    title: "Ahead of the competition",
    description:
      "You appear attractive to potential customers and employees and thereby stand out from the competition.",
  },
] as const;

export const process2 = [
  {
    id: 59,
    processName: "Free analysis & offer",
    processDescription:
      "In a non-binding initial consultation, we analyze the current situation and discuss your expectations and goals. About a day after our initial consultation, you will receive a non-binding offer with a scope of services that is tailored precisely to your needs and goals.",
  },
  {
    id: 60,
    processName: "Strategy & concept",
    processDescription:
      "We analyze your target audience and develop a strategy to ideally position your website. Based on the concept, I create a prototype that gives you an impression of the later structure.",
  },
  {
    id: 61,
    processName: "Design & Development",
    processDescription:
      "You will receive a design draft that we will coordinate together until everything is in place. I will develop your website using WordPress or Webflow based on this template. The site will look perfect on all devices and details and small animations give it that certain something.",
  },
  {
    id: 62,
    processName: "Go live",
    processDescription:
      "In a personal workshop, I'll show you how to manage your content and add new ones. You don't need any technical know-how for this. Ready? Then we'll put your website live together and have a party.",
  },
] as const;
