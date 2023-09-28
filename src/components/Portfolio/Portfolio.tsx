import Button from "../Button/Button";
import ContentPadding from "../ContentPadding/ContentPadding";
import Label from "../Label/Label";
import styles from "./Portfolio.module.css";
import { portfolio } from "@/lib/data";

const Portfolio = () => {
  return (
    <section className={styles.container}>
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
                <h3 className={styles.heading}>{x.client}</h3>
                <p className={styles.copy} lang='en'>
                  {x.clientDesc}
                </p>
                <div className={styles.detailsContainer}>
                  <div className={styles.card}>
                    <h4 className={styles.cardHeading}>Details</h4>
                    <p className={styles.cardCopy}>{x.projectDetails}</p>
                    <br />
                    <h4 className={styles.cardHeading}>Results</h4>
                    <p className={styles.cardCopy}>{x.results}</p>
                  </div>
                </div>
                <div className={styles.btnContainer}>
                  <Button href={x.href} btnType='secondary' target='_blank'>
                    Live Site
                  </Button>
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
