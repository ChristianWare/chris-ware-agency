import Link from "next/link";
import ContentPadding from "../ContentPadding/ContentPadding";
import Label from "../Label/Label";
import styles from "./Portfolio.module.css";
import { portfolio } from "@/lib/data";
import Image from "next/image";

const Portfolio = () => {
  return (
    <section className={styles.container} id='portfolio'>
      <ContentPadding>
        <div className={styles.top}>
          <div className={styles.lableContainer}>
            <Label text='// Recent Projects //' />
          </div>
          <h2 className={styles.mainHeading}>
            <span className={styles.highlight}>Portfolio</span> of recent work
            💼
          </h2>
          <p className={styles.topText}>
            Here are some examples of our past work. Feel free to reach out with
            any questions you have.
          </p>
        </div>
        <div className={styles.content}>
          {portfolio.map((x, index) => (
            <div key={x.id} className={styles.detailsCard}>
              <div className={styles.left}>
                <Label text={`// project ${index + 1} //`} color='secondry' />
                <div className={styles.imgContainer}>
                  <Image
                    src={x.src}
                    alt='website preiview'
                    title={x.client}
                    fill
                    className={styles.img}
                  />
                </div>
                <div className={styles.detailsContainer}>
                  <div className={styles.card}>
                    <h3 className={styles.heading}>{x.client}</h3>
                    <br />
                    <p className={styles.copy} lang='en'>
                      {x.clientDesc}
                    </p>
                    <br />
                    <Link
                      href={x.href}
                      target='_blank'
                      className={styles.cardHeading2}
                    >
                      Live Site
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentPadding>
    </section>
  );
};
export default Portfolio;
