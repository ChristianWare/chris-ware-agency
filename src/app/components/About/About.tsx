import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./About.module.css";
import Image from "next/image";
import Chris from "../../../../public/images/chrisware.jpg";
import Button from "../Button/Button";
import { about } from "@/app/lib/data";

const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <SectionHeading
            labelText='About us'
            headingText='Welcome to the Chris Ware Agency'
            copyText='An overview of the owner and our values'
          />
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
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
            <h3 className={styles.heading3}>About The Owner</h3>
            <div className={styles.overview}></div>
            <p>
              I&rsquo;m Chris Ware, the owner and creative force behind The
              Chris Ware Agency. My journey in the world of web development
              began during my college years, where I discovered my passion for
              crafting digital experiences. Over the past decade and a half,
              I&rsquo;ve honed my skills and transformed that passion into a
              thriving career.
            </p>

            <br />
            <h3 className={styles.heading3}>our values</h3>
            <div className={styles.overview}></div>
            {about.map((x) => (
              <div key={x.id} className={styles.aboutFeature}>
                <span>•</span>
                {x.title}
              </div>
            ))}
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
