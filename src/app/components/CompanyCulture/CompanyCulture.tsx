import styles from "./CompanyCulture.module.css";
import Section from "../Section/Section";
import Image from "next/image";
import img from "../../../../public/images/affordable.png";
import img2 from "../../../../public/images/collab1.png";
import img3 from "../../../../public/images/collab2.png";
import img4 from "../../../../public/images/collab3.png";

const CompanyCulture = () => {
  return (
    <Section
      labelText='Company Culture'
      headingText='work culture & philosophy'
      copyText='what it&#39;s like to work with us'
    >
      <div className={styles.content}>
        <div className={styles.workCulture}>
          <div className={styles.card}>
            <div className={styles.imgContainer}>
              <Image
                src={img3}
                alt='hey'
                title='hey'
                fill
                className={styles.img}
              />
            </div>
          </div>
          <div className={styles.card2}>
            <h3 className={styles.heading}>Collaborative Innovation</h3>
            <p className={styles.copy}>
              We thrive on brainstorming, sharing ideas, and working together
              with you to solve complex challenges. We believe that the best
              solutions emerge when diverse talents come together.
            </p>
          </div>
          <div className={styles.card3}>
            <h3 className={styles.heading}>Client-Centric Dedication</h3>
            <p className={styles.copy}>
              Our culture revolves around serving our clients with dedication
              and excellence. We go the extra mile to understand their goals,
              communicate effectively, and ensure that our web development
              solutions align with their vision and business objectives.
            </p>
          </div>
          <div className={styles.card4}>
            <div className={styles.imgContainer}>
              <Image
                src={img4}
                alt='hey'
                title='hey'
                fill
                className={styles.img4}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default CompanyCulture;
