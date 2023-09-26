import styles from "./CompanyCulture.module.css";
import Section from "../Section/Section";
import Image from "next/image";
import img3 from "../../../public/images/collab2.png";
import img4 from "../../../public/images/collab3.png";

const CompanyCulture = () => {
  return (
    <Section
      labelText='Company Culture'
      headingText='work culture & philosophy'
      copyText='what it&#39;s like to work with us'
    >
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
          <h3 className={styles.heading}>Collaborative</h3>
          <p className={styles.copy}>
            We excel in collaborative brainstorming, blending diverse talents to
            tackle intricate challenges and craft optimal solutions
          </p>
        </div>
        <div className={styles.card3}>
          <h3 className={styles.heading}>Client-Centric</h3>
          <p className={styles.copy}>
            Our culture is client-centric, dedicated to excellence. We delve
            deep to grasp goals, communicate, and align our solutions with your
            vision and business objectives.
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
    </Section>
  );
};
export default CompanyCulture;
