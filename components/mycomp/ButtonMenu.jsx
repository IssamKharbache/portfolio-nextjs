import React from "react";
import styles from "@/app/styles/style.module.scss";
import { motion } from "framer-motion";

const ButtonMenu = ({ isActive, setIsActive }) => {
  return (
    <div
      onClick={() => {
        setIsActive(!isActive);
      }}
      className={styles.menuBtn}
    >
      <motion.div
        className={styles.slider}
        animate={{ top: isActive ? "-100%" : "0" }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className={styles.el}>
          <PersepectiveText label="Menu" />
        </div>
        <div className={styles.el}>
          <PersepectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
};

export default ButtonMenu;

const PersepectiveText = ({ label }) => {
  return (
    <div className={styles.perspectiveText}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
};
