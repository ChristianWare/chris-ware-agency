"use client";

import styles from "./Nav.module.css";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "../../../public/icons/newcwalogo.png";
import Phone from "../../../public/icons/phone.svg";
import Button from "../Button/Button";
import Image from "next/image";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      if (window.innerWidth <= 930 && isOpen) {
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
            <Image
              src={Logo}
              alt='Chris Ware Agency Logo'
              width={173}
              height={20}
            />
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
            <li onClick={openMenu}>
              <Link href='/' className={styles.officialLogoMobile}>
                <Image
                  src={Logo}
                  alt='Chris Ware Agency Logo'
                  width={173}
                  height={20}
                />
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
              <Link href='#services'>Services</Link>
            </li>
            <li className={styles.navItem} onClick={openMenu}>
              <Link href='#portfolio'>Portfolio</Link>
            </li>
            <li className={styles.navItem} onClick={openMenu}>
              <Link href='#pricing'>Pricing</Link>
            </li>
            <li className={styles.navItem} onClick={openMenu}>
              <Link href='#about'>About</Link>
            </li>
            <li className={styles.navItem} onClick={openMenu}>
              <Link href='#contact'>Contact</Link>
            </li>
            <div className={styles.bottom}>
              <p className={styles.copy}>
                Copyright &copy; 2023 Chris Ware Agency || All Rights Reserved
              </p>
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
            {/* <div className={styles.openClose}>
              {isOpen === false ? "//  Menu  //" : "//  Close  //"}
            </div> */}
          </span>
        </div>
        <div className={styles.btnContainer}>
          <a href='tel:6236326780' className={styles.navItem}>
            <Phone width={20} height={20} className={styles.phone} />
            623-632-6780
          </a>
        </div>
      </nav>
    </header>
  );
};
export default Nav;
