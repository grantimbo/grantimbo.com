"use client";

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
          <i className="icon-youtube"></i>
        </Link>
        <Link
          href="https://facebook.com/grntx"
          target="_blank"
          rel="noreferrer"
        >
          <i className="icon-facebook"></i>
        </Link>
        <Link
          href="https://instagram.com/grntx"
          target="_blank"
          rel="noreferrer"
        >
          <i className="icon-instagram"></i>
        </Link>
        <Link
          href="https://twitter.com/grantimbo"
          target="_blank"
          rel="noreferrer"
        >
          <i className="icon-twitter"></i>
        </Link>
        <Link
          href="https://github.com/grantimbo"
          target="_blank"
          rel="noreferrer"
        >
          <i className="icon-github"></i>
        </Link>
        <Link
          href="https://codepen.io/grantimbo"
          target="_blank"
          rel="noreferrer"
        >
          <i className="icon-codepen"></i>
        </Link>
        <Link
          href="https://artstation.com/grantimbo"
          target="_blank"
          rel="noreferrer"
        >
          <i className="icon-artstation"></i>
        </Link>
        <Link
          href="https://behance.net/grantimbo"
          target="_blank"
          rel="noreferrer"
        >
          <i className="icon-behance"></i>
        </Link>
      </div>
    </>
  );
}
