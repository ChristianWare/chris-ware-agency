import SectionHeading from '../SectionHeading/SectionHeading'
import styles from './Process.module.css'
import Image from 'next/image';

const Process = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <SectionHeading
          labelText='Our Process'
          headingText='The way we do things'
          copyText='You&#39;re 5 steps away from a new website...'
        />
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>Left</div>
        <div className={styles.right}>Right</div>
      </div>
    </section>
  );
}
export default Process