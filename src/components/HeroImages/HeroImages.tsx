"use client";

import styles from "./HeroImages.module.css";
import Image from "next/image";
import { heroImages } from "@/lib/data";
import { useEffect, useRef } from "react";
import RotatingText from "../RotatingText/RotatingText";

const HeroImages = () => {
  const container = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const cardContainer = container.current;

      // Adjust the scroll factor as needed to control the horizontal movement
      const scrollFactor = 0.5;
      const newX = scrollY * scrollFactor;

      // Apply the new transform value to the cardContainer's style
      cardContainer.style.transform = `translateX(${newX}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.rtContainer}>
        <RotatingText />
      </div>
      <div className={styles.cardContainer}>
        {heroImages.map((x) => (
          <div key={x.id} className={styles.card}>
            <div className={styles.imgContainer}>
              <Image src={x.src} alt='image' fill className={styles.img} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HeroImages;
