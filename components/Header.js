import Link from "next/link";
// import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactGA from "react-ga4";

const Header = ({ hidemenu, fixed }) => {
  // const router = useRouter();

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
            <span class="material-symbols-rounded">menu</span>
          </div>
        )}
        <Link href="/">
          <div className="logo">Grant Imbo</div>
        </Link>
      </div>
      <nav className="main">
        {/* <Link
          href="/projects?tag=all"
          className={router.query.slug == "/projects" ? "active" : ""}
        >
          <span class="material-symbols-rounded icon">perm_media</span>
          <span>Projects</span>
        </Link>
        <Link
          href="/services"
          className={router.query.slug == "/services" ? "active" : ""}
        >
          <span class="material-symbols-rounded icon">handyman</span>
          <span>Services</span>
        </Link>
        <Link
          href="/about"
          className={router.query.slug == "/about" ? "active" : ""}
        >
          <span class="material-symbols-rounded icon">contact_support</span>
          <span>About</span>
        </Link> */}
      </nav>
    </header>
  );
};

export default Header;
