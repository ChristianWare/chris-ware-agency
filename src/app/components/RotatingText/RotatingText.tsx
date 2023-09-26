"use client";

import { useEffect, useState } from "react";
import styles from "./RotatingText.module.css";

const RotatingText = () => {
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    const scrollListener = () => {
      const scrollY = window.scrollY;
      // Adjust the rotation speed as needed by multiplying scrollY by an appropriate factor
      const newRotationAngle = scrollY * 0.1; // You can change the factor
      setRotationAngle(newRotationAngle);
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className={styles.container}>
      <svg
        className={styles.svg}
        viewBox='0 0 100 100'
        width='100'
        height='100'
        style={{
          transform: `rotate(${rotationAngle}deg)`,
        }}
      >
        <defs>
          <path
            id='circle'
            d='
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0'
          />
        </defs>
        <text font-size='15.3'>
          <textPath className={styles.svg} xlinkHref='#circle'>
            Chris Ware chris Ware Chris
          </textPath>
        </text>
      </svg>
    </div>
  );
};
export default RotatingText;
