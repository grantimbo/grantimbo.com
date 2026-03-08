"use client";

import { icons } from "@/src/utils/icons";
import { HeaderLinkType } from "@/src/utils/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks: HeaderLinkType[] = [
  {
    pageName: "Projects",
    link: "/projects",
    icon: icons.projects,
  },
  {
    pageName: "Services",
    link: "/services",
    icon: icons.services,
  },
  {
    pageName: "About",
    link: "/about",
    icon: icons.about,
  },
];

export default function HeaderLinks() {
  const path = usePathname();

  return (
    <nav className="flex items-center gap-6 md:gap-10">
      {navLinks.map((nav: HeaderLinkType) => {
        return (
          <Link
            key={nav.link}
            href={nav.link}
            className={`${
              path == nav.link
                ? "text-white [&_path]:fill-white"
                : "text-blue-300/80 [&_path]:fill-blue-300/80"
            } flex flex-col items-center justify-between gap-[0.1rem] text-[.7rem] no-underline! hover:text-white md:flex-row md:gap-2 md:px-[0.4rem] md:py-[0.3rem] md:text-base hover:[&_path]:fill-white`}
          >
            {nav.icon}
            {nav.pageName}
          </Link>
        );
      })}
    </nav>
  );
}
