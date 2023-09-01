import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Portfolio.module.css";
import { portfolio } from "@/app/lib/data";
import Image from "next/image";

const Portfolio = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <SectionHeading
            labelText='Our Work'
            headingText='A Glimpse into Our Portfolio'
            copyText='Our latest projects'
          />
        </div>
        <div className={styles.bottom}>
          {portfolio.map((x) => (
            <div key={x.id} className={styles.cardContainer}>
              <h3>{x.title}</h3>
              <p className={styles.desc}>{x.description}</p>
              <div className={styles.imgContainer}>
                <div className={styles.gradient}></div>
                <Image
                  src={x.src}
                  alt='hello'
                  title='hello'
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  className={styles.img}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
