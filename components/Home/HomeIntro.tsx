"use client";

import homeBg from "@/public/imgs/home-bg-lg.png";
import { shimmer, toBase64 } from "@/utils/BlurData";
import { motion } from "framer-motion";
import Image from "next/image";

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
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(100, 100),
          )}`}
          quality={100}
          width={1104}
          height={930}
        />
      </motion.figure>
      <section className="md:flex md:items-center">
        <article className="m-0 mx-auto max-w-[450px] px-8 text-center text-[0.9rem] text-softgray md:text-left  lg:text-[1rem]">
          <motion.h2
            className="text-xl font-semibold text-white lg:text-2xl"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.2 }}
          >{`Designer — Developer`}</motion.h2>
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.3 }}
          >
            {`In the course of more than 11 years, I have been active in the Tech Industry,
            engaging in various projects that span across both creative and
            technical domains.`}
          </motion.p>
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.4 }}
          >
            {`I have experience as a designer, developer, animator, 3D artist,
            video editor, and other related roles. My skill set is adaptable,
            and I am capable of adjusting to diverse tasks as needed. `}
          </motion.p>
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.5 }}
          >
            {`I am always up for learning new things and never get satisfied with
            an average output, always striving for something better and fresh.`}
          </motion.p>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.6 }}
          >
            {/* <Link href="/about" className="button">
              👇 Read More
            </Link> */}
          </motion.div>
        </article>
      </section>
    </section>
  );
}
