"use client";

import SocialIcons from "@/components/SocialIcons";
import aboutBg from "@/public/imgs/about-head-lg.png";
import { shimmer, toBase64 } from "@/utils/BlurData";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutContents() {
  const dropIninitial = { opacity: 0, y: -20 },
    dropInanimate = { opacity: 1, y: 0 };
  return (
    <>
      <section className="head">
        <motion.figure
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{
            duration: 0.4,
          }}
        >
          <Image
            alt="Creator Thinker"
            src={aboutBg}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(100, 100),
            )}`}
            quality={100}
            width={1066}
            height={574}
          />
        </motion.figure>
      </section>

      <section className="about">
        <article>
          <motion.h2
            animate={dropInanimate}
            initial={dropIninitial}
            transition={{
              delay: 0.1,
            }}
          >{`Here's a glimpse into my journey.`}</motion.h2>

          <motion.p
            animate={dropInanimate}
            initial={dropIninitial}
            transition={{
              delay: 0.2,
            }}
          >
            {`In the course of more than 11 years, I have been active in the Tech Industry,
            engaging in various projects that span across both creative and
            technical domains.`}
          </motion.p>

          <motion.p
            animate={dropInanimate}
            initial={dropIninitial}
            transition={{
              delay: 0.3,
            }}
          >
            {`I have experience as a designer, developer, animator, 3D artist,
            video editor, and other related roles. My skill set is adaptable,
            and I am capable of adjusting to diverse tasks as needed.`}
          </motion.p>

          <motion.p
            animate={dropInanimate}
            initial={dropIninitial}
            transition={{
              delay: 0.4,
            }}
          >
            {`I believe anything can be overcome through commitment and hard work.
            I am always up for learning new things and never gets satisfied with an
            average output, always striving for something better and fresh.`}
          </motion.p>

          <motion.p
            animate={dropInanimate}
            initial={dropIninitial}
            transition={{
              delay: 0.5,
            }}
          >
            {`Have an idea you'd like to discuss?`} <br />
            {`Feel free to contact me at `}
            <span>grant.imbo@gmail.com</span>
          </motion.p>

          <motion.p
            animate={dropInanimate}
            initial={dropIninitial}
            transition={{
              delay: 0.6,
            }}
          >
            {`Your can find me online on various platforms `}
            <span>@grantimbo</span> or <span>@grntx</span>{" "}
            {`or by clicking the
            links below.`}
          </motion.p>
          <SocialIcons />
        </article>
      </section>
    </>
  );
}
