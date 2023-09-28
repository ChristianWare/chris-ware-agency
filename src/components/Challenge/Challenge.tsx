import { challenges } from "@/lib/data";
import ContentPadding from "../ContentPadding/ContentPadding";
import Label from "../Label/Label";
import styles from "./Challenge.module.css";
import Image from "next/image";
import Woman from "../../../public/images/woman.png";
import RotatingText from "../RotatingText/RotatingText";

const Challenge = () => {
  return (
    <div className={styles.container}>
      <ContentPadding>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.lableContainer}>
              <Label text='// Challenge //' />
            </div>
            <h2 className={styles.heading}>
              Are you <span className={styles.highlight}>unhappy</span> with
              your current website ?
            </h2>
            <p className={styles.copy}>
              If so, then these problems probably sound familiar to you:
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
              <div className={styles.rtContainer}>
                <RotatingText text='Keep Scrolling' />
              </div>
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
