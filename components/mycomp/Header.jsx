"use client";
import { useState } from "react";
import ButtonMenu from "./ButtonMenu";
import styles from "@/app/styles/style.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./Nav";
import useDeviceSize from "@/lib/useDeviceSize ";
import { usePathname } from "next/navigation";
import { FloatingNavBar } from "@/app/snippets/navbar-snippet";
import Image from "next/image";

const Header = () => {
  const [width] = useDeviceSize();
  const variants = {
    open: {
      width: width > 520 ? 480 : 300,
      height: 650,
      top: "-25px",
      left: "-25px",
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      width: 100,
      height: 40,
      top: "0px",
      left: "0px",
      transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    },
  };
  const [isActive, setIsActive] = useState(false);
  //disable scrolling when menu is opened
  if (process.browser) {
    isActive
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }
  //rendering diff navbar on projects page
  const staticPath = usePathname();
  if (staticPath === "/projects") {
    return <FloatingNavBar />;
  }
  return (
    <div className={styles.header}>
      <motion.div
        variants={variants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
        className={styles.menu}
      >
        {/* nav menu*/}
        <AnimatePresence>
          {isActive && <Nav isActive={isActive} setIsActive={setIsActive} />}
        </AnimatePresence>
      </motion.div>
      {/* button menu */}
      <ButtonMenu isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default Header;
