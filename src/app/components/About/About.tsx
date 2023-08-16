import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./About.module.css";
import Image from "next/image";
import Chris from "../../../../public/images/chrisware.jpg";
import Button from "../Button/Button";

const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <SectionHeading
            labelText='About us'
            headingText='Welcome to the Chris Ware Agency'
            copyText='An overview of who we are as a company and why you will love us!'
          />
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image
                src={Chris}
                alt='hello'
                className={styles.img}
                fill
                sizes='100vw'
              />
            </div>
          </div>
          <div className={styles.right}>
            <h3>About The Owner</h3>
            <div className={styles.overview}>Overview</div>
            <p>
              I&rsquo;m Chris Ware, the owner and creative force behind The
              Chris Ware Agency. My journey in the world of web development
              began during my college years, where I discovered my passion for
              crafting digital experiences. Over the past decade and a half,
              I&rsquo;ve honed my skills and transformed that passion into a
              thriving career.
              <br />
              <br />
              As the driving force behind The Chris Ware Agency, I am dedicated
              to combining cutting-edge technologies with innovative design to
              build websites that not only meet my clients&rsquo; needs but also
              exceed their expectations. With a deep-rooted commitment to
              continuous learning and a keen eye for detail, I am excited to
              bring your web projects to life and create digital solutions that
              leave a lasting impact.
            </p>
            <div className={styles.btnContainer}>
              <Button href='/about' text='More about us' btnType='primary' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
