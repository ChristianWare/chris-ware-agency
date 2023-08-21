import PageIntro from "../components/PageIntro/PageIntro";
import styles from "./About.module.css";

const AboutPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <PageIntro
          label='About'
          heading='About the Chris Ware Agency'
          copy='Welcome to the Chris Ware Agency, where digital innovation and creativity converge to shape extraordinary online experiences. Our journey is rooted in a passion for crafting captivating websites that transcend mere functionality. We embark on a mission to transform ideas into pixel-perfect realities. From sleek and responsive designs to seamless user interactions, we infuse every project with a blend of cutting-edge technology and artistic flair. Join us as we unfold our story, driven by a commitment to redefine the digital landscape and empower businesses through unparalleled web solutions.'
        />
      </div>
    </section>
  );
};
export default AboutPage;
