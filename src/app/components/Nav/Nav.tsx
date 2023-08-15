"use client";

import styles from "./Nav.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      // Check if body element exists
      if (window.innerWidth <= 768 && isOpen) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "auto";
      }
    }

    const handleResize = () => setIsOpen(false);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (body) {
        // Clean up the style when unmounting
        body.style.overflow = "auto";
      }
    };
  }, [isOpen]);

  const router = useRouter();

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href='/'>Chris Ware Agency</Link>
        </div>
        <div className={styles.menuItemsGroup}>
          <ul
            className={
              isOpen === false
                ? styles.navMenu
                : styles.navMenu + " " + styles.active
            }
          >
            <li className={styles.parent}>
              <Link href='/'>Home</Link>
            </li>
            <li className={styles.parent}>
              <Link href='/'>About</Link>
            </li>
            <li className={styles.parent}>
              <Link href='/'>Services</Link>
            </li>
            <li className={styles.parent}>
              <Link href='/'>Contact</Link>
            </li>
          </ul>
          <span
            className={
              isOpen === false
                ? styles.hamburger
                : styles.hamburger + " " + styles.active
            }
          >
            <span className={styles.whiteBar}></span>
            <span className={styles.whiteBar}></span>
            <span className={styles.whiteBar}></span>
          </span>
        </div>
      </nav>
    </header>
  );
};
export default Nav;
