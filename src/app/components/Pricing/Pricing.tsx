import SectionHeading from '../SectionHeading/SectionHeading'
import styles from './Pricing.module.css'

const Pricing = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <SectionHeading
          labelText='Pricing'
          headingText='Your Vision, Your Budget'
          copyText='Flexible plans for every business'
        />
        <div className={styles.bottom}>
          
        </div>
      </div>
    </section>
  );
}
export default Pricing