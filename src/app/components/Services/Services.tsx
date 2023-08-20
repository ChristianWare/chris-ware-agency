import styles from "./Services.module.css";
import { servicesSection, features } from "../../../lib/data";
import Image from "next/image";
import Button from "../Button/Button";
import SectionHeading from "../SectionHeading/SectionHeading";
import Collection from "../../../../public/images/collection.png";

const Services = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <SectionHeading
            labelText='Services'
            headingText='Our Range of web development services'
            copyText='The things we build and what they include'
          />
        </div>
        <div className={styles.bottom}>
          {servicesSection.slice(0, 1).map((x) => (
            <div key={x.id}>
              <h3 className={styles.heading2}>{x.sectionTitle}</h3>
              <div className={styles.serviceCardContainer}>
                {x.services.map((y) => (
                  <div key={y.id} className={styles.serviceCard}>
                    <Image
                      src={y.icon}
                      alt={y.service}
                      title={y.service}
                      width={50}
                      height={50}
                      className={styles.icon}
                    />
                    <h4 className={styles.serviceTitle}>{y.service}</h4>
                    <p className={styles.description}>{y.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.featuresSection}>
          <h3 className={styles.heading2}>
            All websites we build include the following features:
          </h3>
          <p className={styles.copy}>
            We integrate essential features into every site we create. These
            features boost search engine rankings, driving more clicks and
            visitors to your page. Contact us now to enhance your business&#39;s
            online presence and increase revenue!
          </p>
          <div className={styles.featuresBottom}>
            <div className={styles.left}>
              {features.slice(0, 2).map((z) => (
                <div key={z.id} className={styles.featuresCard}>
                  <div className={styles.imgFeatureContainer}>
                    <Image
                      src={z.icon}
                      alt={z.feature}
                      title={z.feature}
                      width={60}
                      height={60}
                    />
                    <h4>{z.feature}</h4>
                  </div>
                  <p className={styles.description}>{z.description}</p>
                </div>
              ))}
            </div>
            <div className={styles.right}>
              <div className={styles.imgContainer}>
                <Image
                  src={Collection}
                  alt='A mix of different devices'
                  title='A mix of different devices'
                  fill
                  className={styles.img}
                />
              </div>
            </div>
            <div className={styles.left}>
              {features.slice(2, 4).map((z) => (
                <div key={z.id} className={styles.featuresCard}>
                  <div className={styles.imgFeatureContainer}>
                    <Image
                      src={z.icon}
                      alt={z.feature}
                      title={z.feature}
                      width={60}
                      height={60}
                    />
                    <h4>{z.feature}</h4>
                  </div>
                  <p className={styles.description}>{z.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.btnContainer}>
          <Button href='/services' text='More services' btnType='primary' />
        </div>
      </div>
    </section>
  );
};
export default Services;
