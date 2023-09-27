import Button from "../Button/Button";
import ContentPadding from "../ContentPadding/ContentPadding";
import Label from "../Label/Label";
import styles from "./Portfolio.module.css";
import Hero6 from "../../../public/images/hero6.png";
import Image from "next/image";

const Portfolio = () => {
  return (
    <section className={styles.container}>
      <ContentPadding>
        <div className={styles.top}>
          <h2>Websites that Inspire</h2>
        </div>
        <div className={styles.detailsCard}>
          <div className={styles.left}>
            <Label text='// Project 1' color='secondry' />
            <h3 className={styles.heading}>Project Name</h3>
            <p className={styles.copy}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              dignissimos perferendis. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Adipisci dignissimos perferendis.
            </p>
            <div className={styles.detailsContainer}>
              <div className={styles.card}>
                <h4 className={styles.cardHeading}>Research</h4>
                <p className={styles.cardCopy}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci
                </p>
              </div>
              <div className={styles.card}>
                <h4 className={styles.cardHeading}>Development</h4>
                <p className={styles.cardCopy}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci
                </p>
              </div>
            </div>
            <div className={styles.btnContainer}>
              <Button href='/' btnType='secondary'>
                Get Started
              </Button>
              <Button href='/' btnType='tertiary'>
                Learn More
              </Button>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <Image src={Hero6} alt='image' fill className={styles.img} />
            </div>
          </div>
        </div>
      </ContentPadding>
    </section>
  );
};
export default Portfolio;
