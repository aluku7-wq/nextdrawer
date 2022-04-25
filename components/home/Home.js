/** @format */

import { useState } from "react";
import Navbar from "../navbar/Navbar";
import styles from "./Home.module.css";
import { motion } from "framer-motion";

const Home = ({ sidebar, setsidebar }) => {
  const [marginTop, setmarginTop] = useState(null);
  return (
    <div>
      <motion.div
        className={styles.container}
        style={{ marginTop: marginTop }}
        animate={{
          marginTop: sidebar ? marginTop : 0,
          transform: sidebar ? "skewY(-5deg)" : 0,
          transition: { duration: 0.5 },
        }}>
        <div className={styles.conatiner_overlay}>
          <Navbar
            sidebar={sidebar}
            setsidebar={setsidebar}
            marginTop={marginTop}
            setmarginTop={setmarginTop}
          />
          <p>home page</p>
          <h2>Have the best experiance of the best footware</h2>
          <button>find out</button>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
