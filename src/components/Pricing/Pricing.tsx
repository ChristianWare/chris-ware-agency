"use client";

import Button from "../Button/Button";
import styles from "./Pricing.module.css";
import { pricing } from "@/lib/data";
import Check from "../../../public/icons/check.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import PhoneCall from "../../../public/icons/phone.svg";
import Calendar from "../../../public/icons/calendar-mark-svgrepo-com.svg";
import Label from "../Label/Label";
import ContentPadding from "../ContentPadding/ContentPadding";

const Pricing = () => {
  const pathname = usePathname();

  return (
    <section className={styles.container} id='pricing'>
      <ContentPadding>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.lableContainer}>
              <Label text='// Our Prices //' />
            </div>
            <h2 className={styles.heading}>
              Monthly <span className={styles.highlight}>Subscriptions</span> 📅
            </h2>
            <p className={styles.topText}>
              These are the prices we charge on a monthly basis. We understand
              that websites can be expensive. So we only charge a small fee.
              Canel anytime, no questions asked. See details below:
            </p>
          </div>
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
              </div>
            ))}
          </div>
          {pathname !== "/pricing" && (
            <div className={styles.btnContainer}>
              <Button href='/#contact' btnType='secondary'>
                <Calendar width={20} height={20} />
                Book a meeting
              </Button>
              <Button href='/#contact' btnType='primary'>
                <PhoneCall width={20} height={20} />
                Contact us
              </Button>
            </div>
          )}
        </div>
      </ContentPadding>
    </section>
  );
};
export default Pricing;
