import Button from "../Button/Button";
import ContentPadding from "../ContentPadding/ContentPadding";
import Label from "../Label/Label";
import styles from "./Portfolio.module.css";
import Image from "next/image";
import { portfolio } from "@/lib/data";

const Portfolio = () => {
  return (
    <section className={styles.container}>
      <ContentPadding>
        <div className={styles.top}>
          <Label text='// Our Work' />
          <h2>Projects </h2>
        </div>
        <div className={styles.content}>
          {portfolio.map((x, index) => (
            <div key={x.id} className={styles.detailsCard}>
              <div className={styles.left}>
                <Label text={`// project ${index + 1}`} color='secondry' />
                <h3 className={styles.heading}>{x.client}</h3>
                <p className={styles.copy} lang='en'>{x.clientDesc}</p>
                <div className={styles.detailsContainer}>
                  <div className={styles.card}>
                    <h4 className={styles.cardHeading}>Details</h4>
                    <p className={styles.cardCopy}>{x.projectDetails}</p>
                  </div>
                  <div className={styles.card}>
                    <h4 className={styles.cardHeading}>Results</h4>
                    <p className={styles.cardCopy}>{x.results}</p>
                  </div>
                </div>
                <div className={styles.btnContainer}>
                  <Button href={x.href} btnType='secondary' target='_blank'>
                    Live Site
                  </Button>
                  <Button href='/' btnType='tertiary'>
                    Learn More
                  </Button>
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.imgContainer}>
                  <Image src={x.src} alt='image' fill className={styles.img} />
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
