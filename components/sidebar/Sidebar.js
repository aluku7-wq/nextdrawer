/** @format */

import { useState } from "react";
import Image from "next/image";
import styles from "./Sidebar.module.css";
import { VscHome } from "react-icons/vsc";
import { MdNotifications } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { AiTwotoneShopping } from "react-icons/ai";
import { motion } from "framer-motion";

const Sidebar = ({ sidebar }) => {
  const [animationIndex, setanimationIndex] = useState(0);
  const list = [
    { icon: VscHome, name: "home" },
    { icon: MdNotifications, name: "notification" },
    { icon: AiTwotoneShopping, name: "shop" },
    { icon: FiSearch, name: "search" },
  ];
  return (
    <div>
      <motion.div
        className={styles.sidebar}
        key="home"
        animate={{
          width: sidebar ? "250px" : 0,
          padding: sidebar ? "40px" : 0,
          transition: { duration: 0.5 },
        }}>
        {sidebar && (
          <>
            <Image src="/images/shoe.png" height="200" width="200" />
            <h6>age footware</h6>
            {list.map((item, index) => {
              return (
                <motion.div
                  animate={{
                    backgroundColor:
                      index === animationIndex ? "rgb(59,97,128)" : "#ffff",
                    color:
                      index === animationIndex ? "#ffff" : "rgb(59,97,128)",
                    transition: { duration: 0.5 },
                  }}
                  className={styles.list}
                  key={index}
                  onClick={() => setanimationIndex(index)}>
                  <item.icon />
                  <p>{item.name}</p>
                </motion.div>
              );
            })}
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Sidebar;
