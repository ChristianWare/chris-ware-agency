import { solutions } from "@/lib/data";
import ContentPadding from "../ContentPadding/ContentPadding";
import Label from "../Label/Label";
import styles from "./Solutions.module.css";
import Image from "next/image";

const Solutions = () => {
  return (
    <div className={styles.container}>
      <ContentPadding>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.lableContainer}>
              <Label text='// Future Proof' />
            </div>
            <h2 className={styles.heading}>
              This is what your{" "}
              <span className={styles.highlight}> website</span>
              can do after we work together
            </h2>
          </div>
          <div className={styles.bottom}>
            <div className={styles.grid}>
              {solutions.map((x) => (
                <div key={x.id} className={styles.card}>
                  <Image
                    src={x.src}
                    alt='icon'
                    width={30}
                    height={30}
                    className={styles.img}
                  />
                  <h3 className={styles.title}>{x.title}</h3>
                  <p className={styles.desc}>{x.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContentPadding>
    </div>
  );
};
export default Solutions;
