"use client";

import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Testimonials.module.css";
import { reviews } from "@/app/lib/data";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const Testimonials = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section className={styles.container} ref={container}>
      <div className={styles.content}>
        <>
          <SectionHeading
            labelText='Testimonials'
            copyText='Words of Trust: Testimonials from Satisfied Clients'
            headingText='What they say about Us'
          />
        </>
        <div className={styles.bottom}>
          <div className={styles.cardContainer1}>
            {reviews.slice(0, 4).map((x) => (
              <motion.div key={x.id} className={styles.card} style={{ x: x1 }}>
                <p className={styles.review}>&rdquo;{x.review}&rdquo;</p>
                <div className={styles.personBox}>
                  <Image
                    src={x.person}
                    alt='person'
                    title='person'
                    width={50}
                    height={50}
                    className={styles.personImage}
                  />
                  <p className={styles.reviewer}>
                    {x.reviewer}
                    <span className={styles.company}>{x.company}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className={styles.cardContainer2}>
            {reviews.slice(4, 9).map((x) => (
              <motion.div key={x.id} className={styles.card} style={{ x: x2 }}>
                <p className={styles.review}>&rdquo;{x.review}&rdquo;</p>
                <div className={styles.personBox}>
                  <Image
                    src={x.person}
                    alt='person'
                    title='person'
                    width={50}
                    height={50}
                    className={styles.personImage}
                  />
                  <p className={styles.reviewer}>
                    {x.reviewer}
                    <span className={styles.company}>{x.company}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
