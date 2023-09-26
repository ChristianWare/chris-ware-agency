import Image from "next/image";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Reasons.module.css";
import Creative from "../../../public/images/creative.png";
import Affordable from "../../../public/images/affordable.png";
import Code from "../../../public/images/code.png";

const Reasons = () => {
  const cards = [
    {
      id: 1,
      src: Affordable,
      reason: "Affordable",
      details:
        "Our pricing begins at $150 per month for fundamental websites, and $250 per month for e-commerce sites. No contracts, cancel at any time.",
    },
    {
      id: 2,
      src: Creative,
      reason: "Creative",
      details:
        "Each website is a unique creation. We craft and construct visually appealing sites, leaving no room for generic templates.",
    },
    {
      id: 3,
      src: Code,
      reason: "Custom Code",
      details:
        "We stay away from page generic builders like WordPress, Go Daddy, or Wix. Our approach involves coding everything from scratch.",
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <SectionHeading
            labelText='Intro'
            headingText='What makes us different?'
            copyText='What makes us unique and why you should choose us'
          />
        </div>
        <div className={styles.bottom}>
          {cards.map((x) => (
            <div className={styles.card} key={x.id}>
              <div className={styles.imgContainer}>
                <Image
                  src={x.src}
                  alt={x.reason}
                  title={x.reason}
                  fill
                  className={styles.img}
                />
              </div>
              <div className={styles.info}>
                <strong className={styles.reason}>{x.reason}</strong>
                <p className={styles.details}>{x.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Reasons;
