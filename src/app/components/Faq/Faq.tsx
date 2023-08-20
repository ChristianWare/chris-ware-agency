"use client";

import { useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Faq.module.css";
import { faqs } from "@/lib/data";

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
          {faqs.map((x, i) => (
            <div
              key={x.id}
              className={styles.qaContainer}
              onClick={() => toggle(i)}
            >
              <h3 className={styles.question}>{x.question}</h3>
              <div
                className={
                  selected === i
                    ? styles.answerContainer + " " + styles.show
                    : styles.answerContainer
                }
              >
                <p className={styles.answer}>{x.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Faq;
