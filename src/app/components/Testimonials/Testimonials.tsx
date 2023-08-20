import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Testimonials.module.css";
import { reviews } from "@/lib/data";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className={styles.container}>
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
              <div key={x.id} className={styles.card}>
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
              </div>
            ))}
          </div>
          <div className={styles.cardContainer2}>
            {reviews.slice(4, 9).map((x) => (
              <div key={x.id} className={styles.card}>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
