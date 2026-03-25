"use client";
import Link from "next/link";

type HeaderLinksScrollProps = {
  isMobileOpen: boolean;
  onMobileLinkClick: () => void;
};

export const HeaderLinksScroll = ({
  isMobileOpen,
  onMobileLinkClick,
}: HeaderLinksScrollProps) => {
  const navLinks = [
    {
      pageName: "Projects",
      link: "projects",
    },
    {
      pageName: "Resume",
      link: "experience",
    },
    {
      pageName: "Services",
      link: "services",
    },
    {
      pageName: "Contact",
      link: "contact",
    },
  ];

  return (
    <>
      <nav className="hidden items-center gap-6 md:flex md:gap-10">
        {navLinks.map((nav) => {
          return (
            <Link
              key={nav.link}
              href={`/#${nav.link}`}
              className="hover:text-eggblue text-sm text-white transition-colors md:text-base"
            >
              {nav.pageName}
            </Link>
          );
        })}
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
          {navLinks.map((nav) => {
            return (
              <Link
                key={nav.link}
                href={`/#${nav.link}`}
                onClick={onMobileLinkClick}
                className="hover:text-eggblue text-3xl font-semibold text-white transition-colors"
              >
                {nav.pageName}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
};
