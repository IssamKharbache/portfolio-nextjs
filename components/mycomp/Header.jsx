"use client";
import { useEffect, useState } from "react";
import ButtonMenu from "./ButtonMenu";
import styles from "@/app/styles/style.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./Nav";
import useDeviceSize from "@/lib/useDeviceSize ";
import { usePathname } from "next/navigation";
//getting actual size of window

const Header = () => {
  const pathName = usePathname();
  console.log(pathName);
  const [width] = useDeviceSize();
  const variants = {
    open: {
      width: width > 520 ? 480 : 350,
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
  if (pathName === "/projects") {
    return <p>No header</p>;
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
          {isActive && <Nav setIsActive={setIsActive} />}
        </AnimatePresence>
      </motion.div>
      {/* button menu */}
      <ButtonMenu isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default Header;
