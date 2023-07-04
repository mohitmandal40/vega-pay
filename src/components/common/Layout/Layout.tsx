import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header";
import Container from "../Container";

const Layout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 750) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sidebarClassName = isSidebarOpen
    ? `${styles.sidebar}`
    : `${styles.sidebar} ${styles.collapsed}`;

  const contentClassName = isSidebarOpen
    ? `${styles.content}`
    : `${styles.content} ${styles.expandedContent}`;

  return (
    <div className={styles.layout}>
      <div className={sidebarClassName}>
        <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      </div>
      <div
        className={contentClassName}
        style={{
          width: isSidebarOpen ? "calc(100vw - 300px)" : "calc(100vw - 100px)",
        }}
      >
        <Container style={{ padding: "16px" }}>
          <Header />
        </Container>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
