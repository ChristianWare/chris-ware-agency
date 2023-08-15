"use client";

import styles from "./Nav.module.css";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
  };

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

  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href='/' className={styles.logo}>
            Chris Ware
          </Link>
        </div>
        <div className={styles.menuItemsGroup}>
          <ul
            className={
              isOpen === false
                ? styles.navMenu
                : styles.navMenu + " " + styles.active
            }
          >
            <li>
              <Link href='/' className={styles.logo2}>
                Chris Ware . Agency
              </Link>
            </li>
            <li className={styles.navItem} onClick={openMenu}>
              <Link
                href='/'
                className={pathname === "/" ? styles.activeLink : ""}
              >
                Home
              </Link>
            </li>
            <li className={styles.navItem} onClick={openMenu}>
              <Link
                href='/about'
                className={pathname.includes("/about") ? styles.activeLink : ""}
              >
                About
              </Link>
            </li>
            <li className={styles.navItem} onClick={openMenu}>
              <Link
                href='/services'
                className={
                  pathname.includes("/services") ? styles.activeLink : ""
                }
              >
                Services
              </Link>
            </li>
            <li className={styles.navItem} onClick={openMenu}>
              <Link
                href='/pricing'
                className={
                  pathname.includes("/pricing") ? styles.activeLink : ""
                }
              >
                Pricing
              </Link>
            </li>
            <li className={styles.navItem} onClick={openMenu}>
              <Link
                href='/faq'
                className={pathname.includes("/faq") ? styles.activeLink : ""}
              >
                FAQ
              </Link>
            </li>
            <li className={styles.navItem} onClick={openMenu}>
              <Link
                href='/blog'
                className={pathname.includes("/blog") ? styles.activeLink : ""}
              >
                Blog
              </Link>
            </li>
            <li className={styles.navItem} onClick={openMenu}>
              <Link
                href='/contact'
                className={
                  pathname.includes("/contact") ? styles.activeLink : ""
                }
              >
                Contact
              </Link>
            </li>
            <div className={styles.bottom}>
              <div className={styles.bottomLeft}>
                <p className={styles.copy}>
                  Copyright &copy; 2023 Chris Ware Agency || All Rights Reserved
                </p>
              </div>
            </div>
          </ul>
          <span
            className={
              isOpen === false
                ? styles.hamburger
                : styles.hamburger + " " + styles.active
            }
            onClick={openMenu}
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
