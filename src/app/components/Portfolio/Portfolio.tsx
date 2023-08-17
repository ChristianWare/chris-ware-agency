import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Portfolio.module.css";
import { portfolio } from "@/lib/data";
import Image from "next/image";

const Portfolio = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <SectionHeading
            labelText='Our Work'
            copyText='From Code to Creation'
            headingText='A Glimpse into Our Portfolio'
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
                  fill
                  sizes='100vw'
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
