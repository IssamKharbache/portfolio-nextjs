import Link from "next/link";
import styles from "@/app/styles/style.module.scss";
import { motion } from "framer-motion";
import { links, footerNavLinks } from "../../app/data";
import { perspective, slideIn } from "@/app/animations/animation";

const Nav = ({ setIsActive }) => {
  return (
    <div className={styles.nav}>
      <div className={styles.navBody}>
        {links.map((link, index) => (
          <div key={index} className={styles.linkContainer}>
            <motion.div
              custom={index}
              variants={perspective}
              animate="enter"
              exit="exit"
              initial="initial"
            >
              <Link
                className={styles.navLinks}
                onClick={() => setIsActive(false)}
                href={link.path}
              >
                {link.name}
              </Link>
            </motion.div>
          </div>
        ))}
      </div>
      <div className={styles.footerNav}>
        {footerNavLinks.map((link, index) => (
          <motion.a
            target="_blank"
            key={`f_${index}`}
            href={link.link}
            custom={index}
            variants={slideIn}
            animate="enter"
            exit="exit"
            initial="initial"
          >
            {link.name}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Nav;
