import { process2 } from "@/lib/data";
import ContentPadding from "../ContentPadding/ContentPadding";
import Label from "../Label/Label";
import styles from "./Process.module.css";
import RotatingText from "../RotatingText/RotatingText";

const Process = () => {
  return (
    <section className={styles.container}>
      <ContentPadding>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.lableContainer}>
              <Label text='// Project Flow //' />
            </div>
            <h2 className={styles.heading3}>
              Your website <br /> in{" "}
              <span className={styles.highlight}>4 steps</span>
              {" "}(✌️ + ✌️)
            </h2>
            <p className={styles.topText}>
              My process is structured so that you get the most added value for
              the least amount of time.
            </p>
            <div className={styles.rtContainer}>
              <RotatingText text='So Close!' showArrow={true} />
            </div>
          </div>
          <div className={styles.right}>
            {process2.map((x, index) => (
              <div key={x.id} className={styles.card}>
                <span className={styles.number}>0{`${index + 1}`}</span>
                <h3 className={styles.processName}>{x.processName}</h3>
                <p className={styles.processDescription}>
                  {x.processDescription}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ContentPadding>
    </section>
  );
};
export default Process;
