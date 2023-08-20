import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Process.module.css";
import Image from "next/image";
import { process } from "@/lib/data";
import Button from "../Button/Button";
import Calendar from "../../../../public/icons/calendar.png";

const Process = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <SectionHeading
          labelText='Our Process'
          headingText='Our Six step Method'
          copyText='You&#39;re 6 steps away from a new website...'
        />

        <div className={styles.bottom}>
          {process.map((x) => (
            <div
              key={x.id}
              className={`${styles.card} ${x.flip ? styles.flip : ""}`}
            >
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
                    fill
                    className={styles.img}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.cta}>
          <h4>Ready to start a Project?</h4>
          <div className={styles.btnContainer}>
            <Button
              href='/contact'
              btnType='primary'
              text='I still have questions'
            />
            <Button
              href='/contact'
              btnType='secondary'
              text='Let&#39;s do it!'
              icon={
                <Image
                  src={Calendar}
                  alt='hey'
                  className={styles.icon}
                  width={20}
                  height={20}
                />
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Process;
