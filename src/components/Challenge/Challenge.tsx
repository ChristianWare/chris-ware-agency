import { challenges } from "@/lib/data";
import ContentPadding from "../ContentPadding/ContentPadding";
import Label from "../Label/Label";
import styles from "./Challenge.module.css";
import Image from "next/image";
import Woman from "../../../public/images/woman.png";

const Challenge = () => {
  return (
    <div className={styles.container}>
      <ContentPadding>
        <div className={styles.content}>
          <div className={styles.top}>
            <Label text='// Challenge' />
            <h2 className={styles.heading}>
              Are you unhappy with your current website
              <span className={styles.highlight}>?</span>
            </h2>
            <p className={styles.copy}>
              Then these problems probably sound familiar to you:
            </p>
          </div>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <div className={styles.grid}>
                {challenges.map((x) => (
                  <div key={x.id} className={styles.card}>
                    <h3 className={styles.title}>{x.title}</h3>
                    <p className={styles.desc}>{x.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.imgContainer}>
                <Image
                  src={Woman}
                  alt='Woman looking at her business website'
                  fill
                  className={styles.img}
                />
              </div>
            </div>
          </div>
        </div>
      </ContentPadding>
    </div>
  );
};
export default Challenge;