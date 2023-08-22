import AllServices from "../components/AllServices/AllServices";
import PageIntro from "../components/PageIntro/PageIntro";
import Process2 from "../components/Process2/Process2";
import styles from "./Services.module.css";

const ServicesPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.pageIntroContainer}>
        <PageIntro
          label='Services'
          heading='Discover Our Comprehensive Web Services'
          copy='Whether you&#39;re looking for captivating website designs, seamless e-commerce integration, robust web applications, or effective digital marketing strategies, we&#39;ve got you covered. With a keen understanding of the ever-evolving digital landscape, we combine cutting-edge technologies with innovative design approaches to create experiences that resonate with your target audience.'
        />
      </div>
      <AllServices />
      <Process2 />
    </section>
  );
};
export default ServicesPage;
