"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ReactGA from "react-ga4";

const Header = ({ hidemenu = false, fixed = false }) => {
  const path = usePathname();
  // ReactGA.initialize("UA-47603859-1");

  // useEffect(() => {
  //   // Send pageview with a custom path
  //   ReactGA.send({
  //     hitType: "pageview",
  //     page: window.location.pathname,
  //     title: `Grant Imbo`,
  //   });
  // }, [router?.pathname]);

  const toggleSidebar = () => {
    document.querySelector("aside.sidebar").classList.toggle("active");
  };

  return (
    <header className={fixed && `fixed`}>
      <div className="menu-logo">
        {!hidemenu && (
          <div className="menu" onClick={() => toggleSidebar()}>
            <span className="material-symbols-rounded">menu</span>
          </div>
        )}
        <Link href="/">
          <div className="logo">Grant Imbo</div>
        </Link>
      </div>
      <nav className="main">
        <Link
          href="/projects?tag=all"
          className={path == "/projects" ? "active" : ""}
        >
          <span className="material-symbols-rounded icon">perm_media</span>
          <span>Projects</span>
        </Link>
        <Link href="/services" className={path == "/services" ? "active" : ""}>
          <span className="material-symbols-rounded icon">handyman</span>
          <span>Services</span>
        </Link>
        <Link href="/about" className={path == "/about" ? "active" : ""}>
          <span className="material-symbols-rounded icon">contact_support</span>
          <span>About</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
