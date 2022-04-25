/** @format */
import { useState } from "react";
import styles from "../styles/HomePage.module.css";
import Home from "../components/home/Home";
import Sidebar from "../components/sidebar/Sidebar";

export default function HomePage() {
  const [sidebar, setsidebar] = useState(false);
  return (
    <div className={styles.container}>
      <Sidebar sidebar={sidebar} />
      <Home sidebar={sidebar} setsidebar={setsidebar} />
    </div>
  );
}
