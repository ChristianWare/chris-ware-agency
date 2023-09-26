"use client";
import styles from "./ContentPadding.module.css";
import { motion } from "framer-motion";

const ContentPadding = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className={styles.container}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      {children}
    </motion.div>
  );
};
export default ContentPadding;
