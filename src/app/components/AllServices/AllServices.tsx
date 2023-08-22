import Section from "../Section/Section";
import styles from "./AllServices.module.css";
import { servicesSection } from "@/lib/data";

const AllServices = () => {
  return (
    <Section
      labelText='All Services'
      headingText='Our Comprehensive Web Solutions'
      copyText='A Suite of Services to Elevate Your Online Impact'
    >
      <div className={styles.bottom}>
        
      </div>
    </Section>
  );
};
export default AllServices;
