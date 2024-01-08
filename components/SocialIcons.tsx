"use client";

import { icons } from "@/utils/icons";
import Link from "next/link";

export default function SocialIcons() {
  return (
    <>
      <div className="social-icons">
        <Link
          href="https://youtube.com/grantimbo"
          target="_blank"
          rel="noreferrer"
        >
          {icons.youtube}
        </Link>
        <Link
          href="https://facebook.com/grntx"
          target="_blank"
          rel="noreferrer"
        >
          {icons.facebook}
        </Link>
        <Link
          href="https://instagram.com/grntx"
          target="_blank"
          rel="noreferrer"
        >
          {icons.instagram}
        </Link>
        <Link
          href="https://twitter.com/grantimbo"
          target="_blank"
          rel="noreferrer"
        >
          {icons.twitter}
        </Link>
        <Link
          href="https://github.com/grantimbo"
          target="_blank"
          rel="noreferrer"
        >
          {icons.github}
        </Link>
        <Link
          href="https://codepen.io/grantimbo"
          target="_blank"
          rel="noreferrer"
        >
          {icons.codepen}
        </Link>
        <Link
          href="https://artstation.com/grantimbo"
          target="_blank"
          rel="noreferrer"
        >
          {icons.artStation}
        </Link>
        <Link
          href="https://behance.net/grantimbo"
          target="_blank"
          rel="noreferrer"
        >
          {icons.behance}
        </Link>
        <Link
          href="https://behance.net/grantimbo"
          target="_blank"
          rel="noreferrer"
        >
          {icons.linkedIn}
        </Link>
      </div>
    </>
  );
}
