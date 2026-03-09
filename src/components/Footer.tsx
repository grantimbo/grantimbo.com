"use client";

import SocialIcons from "@/src/components/SocialIcons";
import Link from "next/link";

const Footer = ({ fade = false }: { fade?: boolean }) => {
  return (
    <>
      <div
        className={`${fade ? "faded bg-drkblue" : "bg-blue"} footer relative flex flex-col items-center px-4 pt-40 pb-20 text-center`}
      >
        <SocialIcons />
        <p className="[&_a]:text-eggblue mb-3 w-full max-w-[470px] px-4 text-[0.8rem] text-blue-100/80 md:px-0 md:text-[0.9rem] [&_a]:hover:text-blue-100">
          {`2026 © Grant Imbo`}
        </p>

        <p className="[&_a]:text-eggblue mb-3 w-full max-w-[470px] px-4 text-[0.8rem] text-blue-100/40 md:px-0 md:text-[0.8rem] [&_a]:hover:text-blue-100">
          {`A fusion of design and code crafted from scratch by yours truly.`}
        </p>
        <p className="[&_a]:text-eggblue mb-3 w-full max-w-[470px] px-4 text-[0.8rem] text-blue-100/40 md:px-0 md:text-[0.8rem] [&_a]:hover:text-blue-100">
          {`Crafted through a pipeline of `}
          <Link
            href="https://www.adobe.com/ph_en/products/photoshop.html"
            target="_blank"
          >
            Photoshop
          </Link>
          {` and `}
          <Link href="https://www.maxon.net/en/cinema-4d" target="_blank">
            Cinema 4D
          </Link>
          {` with `}
          <Link
            href="https://home.otoy.com/render/octane-render/"
            target="_blank"
          >
            Octane
          </Link>
          {` for high-fidelity 3D visuals. Written in high-performance `}
          <Link href="https://www.nextjs.org" target="_blank">
            Next.js
          </Link>
          {` and deployed on `}
          <Link href="https://www.vercel.com" target="_blank">
            Vercel.
          </Link>
          {` Learn more about this project `}
          <Link href="/projects/web-dev/grntx-2020">here.</Link>
        </p>
      </div>
    </>
  );
};

export default Footer;
