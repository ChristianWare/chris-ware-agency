"use client";

import { useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Faq.module.css";
import { faqs } from "@/lib/data";
import Button from "../Button/Button";
import Plus from "../../../../public/icons/plus.svg";

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
      <div className={styles.content}>
        <SectionHeading
          labelText='FAQ&#39;s'
          headingText='Frequently Asked Questions'
          copyText='Common questions and answers'
        />
        <div className={styles.bottom}>
          {faqs.slice(0, 4).map((x, i) => (
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
        <div className={styles.btnContainer}>
          <Button href='/faq' text='More FAQs' btnType='primary' />
        </div>
      </div>
    </section>
  );
};
export default Faq;
