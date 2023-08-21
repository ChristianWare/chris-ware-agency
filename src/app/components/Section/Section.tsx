import { FC } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Section.module.css";

interface SectionProps {
  labelText: string;
  headingText: string;
  copyText: string;
  children: React.ReactNode;
}

const Section: FC<SectionProps> = ({
  labelText,
  headingText,
  copyText,
  children,
}) => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <SectionHeading
            labelText={labelText}
            headingText={headingText}
            copyText={copyText}
          />
        </div>
        <div className={styles.bottom}>{children}</div>
      </div>
    </section>
  );
};
export default Section;
