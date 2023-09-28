"use client";

import { useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Faq.module.css";
import { faqs } from "@/lib/data";
import Plus from "../../../public/icons/plus.svg";
import Label from "../Label/Label";
import ContentPadding from "../ContentPadding/ContentPadding";

const Faq = () => {
  const [selected, setSelected] = useState<null | number>(null);

  const toggle = (i: any) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <section className={styles.container}>
      <ContentPadding>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.lableContainer}>
              <Label text='// Questions Often Asked //' />
            </div>
            <h2 className={styles.heading}>
              You may have <span className={styles.highlight}>wondered</span> 🧐
            </h2>
            <p className={styles.topText}>
              Here are some commonly asked questions and their answers below. If
              you don&#39;t see your questions here, call us any time.
            </p>
          </div>
          <div className={styles.bottom}>
            {faqs.slice(0, 5).map((x, i) => (
              <div
                key={x.id}
                className={styles.qaContainer}
                onClick={() => toggle(i)}
              >
                <div className={styles.headingArrowContainer}>
                  <h3 className={styles.question} lang='en'>
                    {x.question}
                  </h3>
                  {selected === i ? (
                    <Plus className={styles.iconFlip} width={30} height={30} />
                  ) : (
                    <Plus className={styles.icon} width={30} height={30} />
                  )}
                </div>
                <div
                  className={
                    selected === i
                      ? styles.answerContainer + " " + styles.show
                      : styles.answerContainer
                  }
                >
                  <p className={styles.answer} lang='en'>
                    {x.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.btnContainer}></div>
        </div>
      </ContentPadding>
    </section>
  );
};
export default Faq;
