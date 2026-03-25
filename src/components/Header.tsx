"use client";

import Link from "next/link";
import { HeaderLinksScroll } from "./HeaderLinksScroll";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header
        className={`bg-drkblue/30 fixed top-0 z-20 flex h-15 w-full justify-between border-b-2 border-blue-600/10 pr-4 pl-2 backdrop-blur-md`}
      >
        <div className="flex items-center gap-1">
          <Link
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();

                window.scrollTo({
                  top: 0,
                  behavior: "smooth", // Use "instant" if you don't want the animation
                });
              }
            }}
            href="/"
            className="hover:text-eggblue pl-2 text-2xl font-semibold text-white no-underline transition-colors sm:block"
          >
            Grant Imbo
          </Link>
        </div>
        <div className="flex items-center gap-4 md:gap-10">
          <HeaderLinksScroll
            isMobileOpen={isMobileMenuOpen}
            onMobileLinkClick={() => setIsMobileMenuOpen(false)}
          />
          <button className="flex items-center gap-2 rounded-full border border-[#49d600]/50 bg-[#49d600]/10 px-3 py-1.5 text-xs text-[#49d600] transition-colors hover:bg-[#49d600]/20">
            <span className="inline-block h-2 w-2 rounded-full bg-[#49d600]"></span>
            <span>Available:</span>
            <span className="text-white">Part-Time</span>
          </button>

          <button
            className="z-50 text-white md:hidden"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => {
              setIsMobileMenuOpen((prev) => !prev);
            }}
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.633h16.5M3.75 12h16.5m-16.5 5.367h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </header>
      <div className="h-15 w-full" />
    </>
  );
};

export default Header;
