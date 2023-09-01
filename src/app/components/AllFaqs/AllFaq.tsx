"use client";

import Image from "next/image";
import Section from "../Section/Section";
import styles from "./AllFaq.module.css";
import { faqs } from "@/app/lib/data";
import { useState } from "react";
import Plus from "../../../../public/icons/plus.svg";

const AllFaq = () => {
  const [selected, setSelected] = useState<null | number>(null);

  const toggle = (i: any) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <Section
      labelText='questions'
      headingText='Inquires and Answers'
      copyText='All questions here'
    >
      <div className={styles.bottom}>
        {faqs.map((x, i) => (
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
    </Section>
  );
};
export default AllFaq;
