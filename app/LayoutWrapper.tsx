"use client";

import React, { useEffect, useState } from "react";
import Footer2 from "../components/footer/footer2";
import Header from "../components/header/header";
import Header2 from "../components/header/Header2";

interface LayoutProps {
  children: React.ReactNode;
  HeaderStyle?: string;
  darkMode?: string;
  menuType?: string;
}

const LayoutWrapper: React.FC<LayoutProps> = ({
  children,
  HeaderStyle,
  darkMode,
  menuType,
}) => {
  const [scroll, setScroll] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScroll(window.scrollY > 100);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode === "1");
    document.body.classList.toggle("single-menu", menuType === "single");

    return () => {
      document.body.classList.remove("dark-mode", "single-menu");
    };
  }, [darkMode, menuType]);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-visible", mobileMenuVisible);

    return () => {
      document.body.classList.remove("mobile-menu-visible");
    };
  }, [mobileMenuVisible]);

  const headerProps = {
    handleOpen: () => setMobileMenuVisible(true),
    handleRemove: () => setMobileMenuVisible(false),
    handleRemove2: () => undefined,
    scroll,
  };

  return (
    <div id="top">
      <div className="page-wrapper">
        {HeaderStyle === "two" ? (
          <Header2 {...headerProps} />
        ) : (
          <Header {...headerProps} />
        )}

        {children}

        <Footer2 />
      </div>
    </div>
  );
};

export default LayoutWrapper;
