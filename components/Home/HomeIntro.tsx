"use client";

import homeBg from "@/public/imgs/home-bg-lg.png";
import { shimmer, toBase64 } from "@/utils/BlurData";
import AnimateBlock from "@/utils/animateBlock";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HomeIntro() {
  return (
    <section className="home mx-auto max-w-7xl items-center md:grid md:grid-cols-[1.2fr_1fr] md:py-20 lg:grid-cols-[1.5fr_1fr]">
      <motion.figure
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.95 }}
        transition={{
          duration: 0.4,
        }}
      >
        <Image
          alt="Creator Thinker"
          src={homeBg}
          sizes="(max-width: 450px) 50vw, (max-width: 768px) 100vw"
          placeholder={`data:image/svg+xml;base64,${toBase64(
            shimmer(1104, 930, "#090e20", "#0f1429"),
          )}`}
          quality={100}
          width={1104}
          height={930}
        />
      </motion.figure>
      <section className="md:flex md:items-center">
        <article className="m-0 mx-auto max-w-[450px] px-8 text-center text-[0.9rem] md:text-left lg:text-[1rem]  [&_p]:text-softgray">
          <AnimateBlock delay={0.3}>
            <h2 className="text-xl font-semibold text-white lg:text-2xl">{`I Design & Code`}</h2>
          </AnimateBlock>

          <AnimateBlock delay={0.6}>
            <p>{`With over 15 years of experience in the tech industry, I bridge the gap between functionality and design.`}</p>
          </AnimateBlock>
          <AnimateBlock delay={0.8}>
            <p>{`I am adaptable, easy to work with, and always focused on attention to detail, ensuring the final output goes beyond the standard.`}</p>
          </AnimateBlock>
        </article>
      </section>
    </section>
  );
}
