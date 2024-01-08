"use client";

import { icons } from "@/utils/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ReactGA from "react-ga4";

type HeaderProps = {
  hidemenu?: boolean;
  fixed?: boolean;
};

const Header = ({ hidemenu = false, fixed = false }: HeaderProps) => {
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
    const sidebar = document.querySelector(
      "aside.sidebar",
    ) as HTMLInputElement | null;

    if (sidebar != null) {
      console.log(sidebar.value); // 👉️ "Initial value"
      sidebar.classList.toggle("active");
    }
  };

  return (
    <header className={fixed == true ? `fixed` : ""}>
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
        <Link href="/projects" className={path == "/projects" ? "active" : ""}>
          {icons.projects}
          <span>Projects</span>
        </Link>
        <Link href="/services" className={path == "/services" ? "active" : ""}>
          {icons.services}
          <span>Services</span>
        </Link>
        <Link href="/about" className={path == "/about" ? "active" : ""}>
          {icons.about}
          <span>About</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
