import { process } from "@/app/lib/data";
import Section from "../Section/Section";
import styles from "./Process2.module.css";
import Image from "next/image";

const Process2 = () => {
  return (
    <Section
      labelText='Our Process'
      headingText='Our Proven Project Approach'
      copyText='Meticulous steps we take to transform your ideas into materpices'
    >
      <div className={styles.bottom}>
        {process.map((x) => (
          <div key={x.id} className={styles.card}>
            <div className={styles.left}>
              <div className={styles.headingCopyContainer}>
                <h3 className={styles.headingh3}>{x.processName}</h3>
                <p className={styles.copy}>{x.processDescription}</p>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.imgContainer}>
                <Image
                  src={x.src}
                  alt={x.processName}
                  title={x.processName}
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  className={styles.img}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
export default Process2;
