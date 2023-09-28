import styles from "./AboutSection.module.css";
import Image from "next/image";
import Chris from "../../../public/images/chrisware.jpg";
import Button from "../Button/Button";
import Label from "../Label/Label";
import ContentPadding from "../ContentPadding/ContentPadding";
import RotatingText from "../RotatingText/RotatingText";

const AboutSection = () => {
  return (
    <section className={styles.container}>
      <ContentPadding>
        <div className={styles.content}>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <div className={styles.rtContainer}>
                <RotatingText text='Almost There' />
              </div>
              <div className={styles.imgContainer}>
                <Image
                  src={Chris}
                  alt='Image of the owner, Chris Ware'
                  title='Chris Ware'
                  className={styles.img}
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.lableContainer}>
                <Label text='// About Us //' />
              </div>
              <h2 className={styles.heading3}>Hi, I&#39;m Chris</h2>
              <p className={styles.chrisCopy}>
                I&rsquo;m Chris Ware, the owner and creative force behind The
                Chris Ware Agency. My journey in the world of web development
                began during my college years, where I discovered my passion for
                crafting digital experiences. Over the past decade and a half,
                I&rsquo;ve honed my skills and transformed that passion into a
                thriving career.
              </p>

              <br />
              <h2 className={styles.heading3}>How I can help</h2>
              <p className={styles.chrisCopy}>
                I am your sole contact person throughout the entire project,
                which means we can work together quickly and safely.
              </p>

              <div className={styles.btnContainer}>
                <Button href='/' btnType='secondary'>
                  Contact us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ContentPadding>
    </section>
  );
};
export default AboutSection;
