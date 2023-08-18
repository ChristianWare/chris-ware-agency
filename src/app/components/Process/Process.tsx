import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Process.module.css";
import Image from "next/image";
import { process } from "@/lib/data";

const Process = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <SectionHeading
          labelText='Our Process'
          headingText='The way we do things'
          copyText='You&#39;re 5 steps away from a new website...'
        />

        <div className={styles.bottom}>
          {process.map((x) => (
            <div
              key={x.id}
              className={`${styles.card} ${x.flip ? styles.flip : ""}`}
            >
              <div className={styles.left}>
                <div className={styles.headingCopyContainer}>
                  <h3>{x.processName}</h3>
                  <p className={styles.copy}>{x.processDescription}</p>
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.imgContainer}>
                  <Image
                    src={x.src}
                    alt={x.processName}
                    fill
                    className={styles.img}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Process;
