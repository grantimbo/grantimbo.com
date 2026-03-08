"use client";

import { icons } from "@/src/utils/icons";
import { SocialLinkType } from "@/src/utils/types";
import Link from "next/link";

const socialLinks: SocialLinkType[] = [
  {
    href: "https://youtube.com/grantimbo",
    icon: icons.youtube,
  },
  {
    href: "https://facebook.com/grntx",
    icon: icons.facebook,
  },
  {
    href: "https://instagram.com/grntx",
    icon: icons.instagram,
  },
  {
    href: "https://twitter.com/grantimbo",
    icon: icons.twitter,
  },
  {
    href: "https://github.com/grantimbo",
    icon: icons.github,
  },
  {
    href: "https://codepen.io/grantimbo",
    icon: icons.codepen,
  },
  {
    href: "https://artstation.com/grantimbo",
    icon: icons.artStation,
  },
  {
    href: "https://behance.net/grantimbo",
    icon: icons.behance,
  },
  {
    href: "https://www.linkedin.com/in/grantimbo/",
    icon: icons.linkedIn,
  },
];

export default function SocialIcons() {
  return (
    <>
      <div className="my-10 flex gap-4">
        {socialLinks.map((link: SocialLinkType) => {
          return (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="[&_path]:fill-eggblue [&_path]:hover:fill-white"
            >
              {link.icon}
            </Link>
          );
        })}
      </div>
    </>
  );
}
