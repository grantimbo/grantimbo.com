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
            <h2 className="text-xl font-semibold text-white lg:text-2xl">{`Designer — Developer`}</h2>
          </AnimateBlock>

          <AnimateBlock delay={0.6}>
            <p>{`Since 2012, I’ve walked the line between code and creativity, shaping ideas through pixels, motion, and sound.`}</p>
          </AnimateBlock>
          <AnimateBlock delay={0.8}>
            <p>{`From designing and developing to animating and editing in 3D, I’ve worn many hats — each one a new way to tell a story.`}</p>
          </AnimateBlock>
          <AnimateBlock delay={1.0}>
            <p>{`I see every project as a chance to grow and explore — constantly reaching, refining, and shaping something better, something fresh.`}</p>
          </AnimateBlock>
          <AnimateBlock delay={1.2}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 rounded-full border-2 border-eggblue bg-eggblue/30 px-[1.2rem] py-[0.5rem] text-[0.9rem] text-white !no-underline hover:border-eggblue/30 hover:bg-eggblue/10"
            >
              Projects 👉
            </Link>
          </AnimateBlock>
        </article>
      </section>
    </section>
  );
}
