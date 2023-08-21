"use client";

import { useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Faq.module.css";
import { faqs } from "@/lib/data";
import Button from "../Button/Button";
import ArrowRight from "../../../../public/icons/faqArrow.png";
import Image from "next/image";

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
                  <Image
                    src={ArrowRight}
                    alt='arrow'
                    title='arrow icon'
                    className={styles.arrow}
                  />
                ) : (
                  <Image
                    src={ArrowRight}
                    alt='arrow'
                    title='arrow icnn'
                    className={styles.arrowFlip}
                  />
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
