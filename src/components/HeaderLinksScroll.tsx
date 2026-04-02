"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const navLinks = [
  { pageName: "Projects", link: "projects" },
  { pageName: "Resume", link: "experience" },
  { pageName: "Services", link: "services" },
  { pageName: "Contact", link: "contact" },
] as const;

const sectionIds = navLinks.map((n) => n.link);

type HeaderLinksScrollProps = {
  isMobileOpen: boolean;
  onMobileLinkClick: () => void;
};

export const HeaderLinksScroll = ({
  isMobileOpen,
  onMobileLinkClick,
}: HeaderLinksScrollProps) => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const updateActiveSection = useCallback(() => {
    if (pathname !== "/") {
      setActiveSection(null);
      return;
    }

    const header = document.querySelector("header");
    const offset = (header?.offsetHeight ?? 64) + 8;

    let current: string | null = null;
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      const top = el.getBoundingClientRect().top + window.scrollY;
      if (window.scrollY + offset >= top) {
        current = id;
      }
    }
    setActiveSection(current);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, [pathname, updateActiveSection]);

  const linkClassDesktop = (linkId: string) =>
    activeSection === linkId
      ? "text-sm text-white md:text-base"
      : "text-eggblue text-sm transition-colors hover:text-white md:text-base";

  const linkClassMobile = (linkId: string) =>
    activeSection === linkId
      ? "text-3xl font-semibold text-eggblue transition-colors"
      : "text-3xl font-semibold text-white transition-colors hover:text-eggblue";

  return (
    <>
      <nav className="hidden items-center gap-6 md:flex md:gap-10">
        {navLinks.map((nav) => (
          <Link
            key={nav.link}
            href={`/#${nav.link}`}
            className={linkClassDesktop(nav.link)}
          >
            {nav.pageName}
          </Link>
        ))}
      </nav>

      <div
        className={`bg-drkblue/95 fixed inset-0 z-40 h-screen w-screen transition-opacity duration-200 md:hidden ${
          isMobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        id="mobile-menu"
        aria-hidden={!isMobileOpen}
      >
        <nav className="flex h-full w-full flex-col items-center justify-center gap-8">
          {navLinks.map((nav) => (
            <Link
              key={nav.link}
              href={`/#${nav.link}`}
              onClick={onMobileLinkClick}
              className={linkClassMobile(nav.link)}
            >
              {nav.pageName}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};
