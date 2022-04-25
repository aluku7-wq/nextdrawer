/** @format */

import React from "react";
import styles from "./Navbar.module.css";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import { AiTwotoneShopping } from "react-icons/ai";

const Navbar = ({ sidebar, setsidebar, marginTop, setmarginTop }) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navmenu}>
        {marginTop ? (
          <MdOutlineClose
            onClick={() => {
              setmarginTop(null);
              setsidebar(!sidebar);
            }}
          />
        ) : (
          <HiOutlineMenuAlt4
            onClick={() => {
              setmarginTop("100px"), setsidebar(!sidebar);
            }}
          />
        )}
      </div>
      <div className={styles.navlogo}>
        <AiTwotoneShopping />
      </div>
      <div className={styles.search}>
        <FiSearch />
      </div>
    </div>
  );
};

export default Navbar;
