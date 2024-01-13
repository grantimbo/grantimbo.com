"use client";

import SocialIcons from "@/components/SocialIcons";
import aboutBg from "@/public/imgs/about-head-lg.png";
import { shimmer, toBase64 } from "@/utils/BlurData";
import AnimateBlock from "@/utils/animateBlock";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutContents() {
  return (
    <>
      <section className="mx-auto max-w-[1066px]">
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

      <section className="mx-auto mb-36 mt-10 max-w-xl">
        <article className="p-8 text-sm leading-tight text-softgray lg:text-base lg:leading-tight">
          <AnimateBlock delay={0.3}>
            <h3 className="mb-2 text-lg text-eggblue md:text-2xl">{`Here's a glimpse into my journey.`}</h3>
          </AnimateBlock>

          <AnimateBlock delay={0.6}>
            <p>{`In the course of more than 11 years, I have been active in the Tech Industry,
            engaging in various projects that span across both creative and
            technical domains.`}</p>
          </AnimateBlock>
          <AnimateBlock delay={0.8}>
            <p>{`I have experience as a designer, developer, animator, 3D artist,
            video editor, and other related roles. My skill set is adaptable,
            and I am capable of adjusting to diverse tasks as needed.`}</p>
          </AnimateBlock>
          <AnimateBlock delay={1.0}>
            <p>{`I believe anything can be overcome through commitment and hard work.
            I am always up for learning new things and never gets satisfied with an
            average output, always striving for something better and fresh.`}</p>
          </AnimateBlock>
          <AnimateBlock delay={1.2}>
            <p>
              {" "}
              {`Have an idea you'd like to discuss?`} <br />
              {`Feel free to contact me at `}
              <span>grant.imbo@gmail.com</span>
            </p>
          </AnimateBlock>
          <AnimateBlock delay={1.4}>
            <p>
              {`Your can find me online on various platforms `}
              <span>@grantimbo</span> or <span>@grntx</span>{" "}
              {`or by clicking the links below.`}
            </p>
          </AnimateBlock>
          <AnimateBlock delay={1.4}>
            <SocialIcons />
          </AnimateBlock>
        </article>
      </section>
    </>
  );
}
