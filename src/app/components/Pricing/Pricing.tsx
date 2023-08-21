import Button from "../Button/Button";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Pricing.module.css";
import { pricing } from "@/lib/data";
import Check from "../../../../public/icons/check.png";
import Image from "next/image";

const Pricing = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <SectionHeading
          labelText='Pricing'
          headingText='Our prices'
          copyText='Dollars behind the details'
        />
        <div className={styles.bottom}>
          {pricing.map((x) => (
            <div key={x.id} className={styles.card}>
              <h3 className={styles.planName}>{x.plan}</h3>
              <p className={styles.description}>{x.description}</p>
              <hr className={styles.hr} />
              <strong className={styles.price}>
                $ {x.price} <span className={styles.span}>/ mo</span>
              </strong>
              <p className={styles.includes}>Includes:</p>
              <div className={styles.checkFeatureContainer}>
                {x.includes.map((y, index) => (
                  <ul key={index} className={styles.featuresList}>
                    <li>
                      <Image
                        src={Check}
                        alt='check icon'
                        title='check icon'
                        width={30}
                        height={30}
                        className={styles.icon}
                      />{" "}
                      {y.feature}
                    </li>
                  </ul>
                ))}
              </div>
              <div className={styles.btnContainer}>
                <Button href='/' text='More detials' btnType={x.btnType} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Pricing;
