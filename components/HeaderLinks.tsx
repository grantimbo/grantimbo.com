"use client";

import { icons } from "@/utils/icons";
import { HeaderLinkType } from "@/utils/types";
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
    <nav className="flex items-center gap-6 md:gap-10 ">
      {navLinks.map((nav: HeaderLinkType) => {
        return (
          <Link
            key={nav.link}
            href={nav.link}
            className={`${
              path == nav.link
                ? "text-[#fff] [&_path]:fill-[#fff]"
                : "text-eggblue [&_path]:fill-eggblue"
            }  flex flex-col items-center justify-between gap-[0.1rem] text-[.7rem] hover:text-white md:flex-row md:gap-2 md:px-[0.4rem] md:py-[0.3rem] md:text-base [&_path]:hover:fill-white`}
          >
            {nav.icon}
            {nav.pageName}
          </Link>
        );
      })}
    </nav>
  );
}
