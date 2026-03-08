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
        <p className="[&_a]:text-eggblue w-full max-w-[470px] px-4 text-[0.8rem] text-blue-100/40 md:px-0 md:text-[0.8rem] [&_a]:hover:text-blue-100">
          Designed in{" "}
          <Link
            href="https://www.adobe.com/ph_en/products/photoshop.html"
            target="_blank"
          >
            Photoshop
          </Link>{" "}
          and coded in{" "}
          <Link href="https://code.visualstudio.com/" target="_blank">
            Visual Studio Code
          </Link>{" "}
          by yours truly. Built with{" "}
          <Link href="https://www.nextjs.org" target="_blank">
            Next.js
          </Link>{" "}
          and deployed with{" "}
          <Link href="https://www.vercel.com" target="_blank">
            Vercel
          </Link>
          . 3D typography is created in{" "}
          <Link href="https://www.maxon.net/en/cinema-4d" target="_blank">
            Cinema 4D
          </Link>{" "}
          and rendered with{" "}
          <Link
            href="https://home.otoy.com/render/octane-render/"
            target="_blank"
          >
            Octane
          </Link>
          .
        </p>
      </div>
    </>
  );
};

export default Footer;
