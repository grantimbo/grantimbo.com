"use client";

import serviceBg from "@/public/imgs/services-head-lg.png";
import margetingImg from "@/public/imgs/services/email-marketing-lg.png";
import designImg from "@/public/imgs/services/graphic-design-lg.png";
import prodRenImg from "@/public/imgs/services/product-renders-lg.png";
import vidProdImg from "@/public/imgs/services/video-production-lg.png";
import webAppsImg from "@/public/imgs/services/website-apps-lg.png";
import { shimmer, toBase64 } from "@/src/utils/BlurData";
import { ServiceType } from "@/src/utils/types";
import { motion } from "framer-motion";
import Image from "next/image";
import TitleParalax from "./TitleParalax";

const fadeIninitial = { opacity: 0, scale: 0.95 };
const fadeInanimate = { opacity: 1, scale: 1 };
const dropIninitial = { opacity: 0, y: -20 };
const dropInanimate = { opacity: 1, y: 0 };

const serviceList: ServiceType[] = [
  {
    image: designImg,
    delay: 0.2,
    title: "Graphic Design",
    description:
      "Product labels, posters, banners, logos, brochures, ebooks or any visual expressions.",
  },
  {
    image: webAppsImg,
    delay: 0.8,
    title: "Website & Apps",
    description:
      "API driven websites and apps using the latest technologies and frameworks.",
  },
  {
    image: prodRenImg,
    delay: 1.5,
    title: "Product Renders",
    description:
      "High quality realistic product 3D renderings that will increase your sales on Amazon.",
  },
  {
    image: vidProdImg,
    delay: 2.1,
    title: "Video Production",
    description:
      "Logo intro reveal, Explainer videos, Motion design in 2D/3D or a simple VFX animation.",
  },
  {
    image: margetingImg,
    delay: 2.8,
    title: "Marketing",
    description:
      "Generate leads, Run a webinar, Sell your products and leverage the power of social media marketing.",
  },
];

export default function HomeServices() {
  const renderLeftContentImage = (service: ServiceType) => {
    return (
      <article
        key={service.title}
        className="mb-8 grid grid-cols-[1fr_1.5fr] gap-4"
      >
        <motion.div
          className="max-w-[323px]"
          animate={fadeInanimate}
          initial={fadeIninitial}
          transition={{
            duration: 0.4,
            delay: service.delay,
          }}
        >
          <Image
            alt={service.title}
            src={service.image}
            width={323}
            height={323}
            quality={100}
            sizes="(max-width: 450px) 50vw, (max-width: 768px) 100vw"
            placeholder={`data:image/svg+xml;base64,${toBase64(
              shimmer(323, 323, "#090e20", "#0f1429"),
            )}`}
          />
        </motion.div>
        <div className="flex items-center">
          <div>
            <motion.h3
              className="mb-2 text-base font-medium text-white md:mb-4 md:text-2xl"
              animate={dropInanimate}
              initial={dropIninitial}
              transition={{
                delay: service.delay,
                duration: 0.4,
              }}
            >
              {service.title}
            </motion.h3>
            <motion.p
              className="pr-[25%] text-xs leading-tight text-blue-300/50 sm:text-sm md:leading-tight"
              animate={dropInanimate}
              initial={dropIninitial}
              transition={{
                delay: service.delay + 0.1,
                duration: 0.4,
              }}
            >
              {service.description}
            </motion.p>
          </div>
        </div>
      </article>
    );
  };

  const renderRightContentImage = (service: ServiceType) => {
    return (
      <article
        key={service.title}
        className="mb-8 grid grid-cols-[1.5fr_1fr] gap-4 text-right"
      >
        <div className="flex items-center">
          <div>
            <motion.h3
              className="mb-2 text-base font-medium text-white md:mb-4 md:text-2xl"
              animate={dropInanimate}
              initial={dropIninitial}
              transition={{
                delay: service.delay,
              }}
            >
              {service.title}
            </motion.h3>
            <motion.p
              className="pl-[25%] text-xs text-blue-300/50 sm:text-sm md:leading-tight"
              animate={dropInanimate}
              initial={dropIninitial}
              transition={{
                delay: service.delay + 0.1,
              }}
            >
              {service.description}
            </motion.p>
          </div>
        </div>
        <motion.div
          className="max-w-[323px]"
          animate={fadeInanimate}
          initial={fadeIninitial}
          transition={{
            duration: 0.4,
            delay: service.delay,
          }}
        >
          <Image
            alt={service.title}
            placeholder="blur"
            src={service.image}
            width={323}
            height={323}
            quality={100}
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(323, 323, "#090e20", "#0f1429"),
            )}`}
          />
        </motion.div>
      </article>
    );
  };

  const layers = [
    {
      src: "/imgs/paralax-title/balls-sm.png",
      alt: "Balls background",
      depth: 0.2,
      zIndex: 1,
    },
    {
      src: "/imgs/paralax-title/balls-md.png",
      alt: "Balls mid",
      depth: 0.25,
      zIndex: 2,
    },
    {
      src: "/imgs/paralax-title/balls-lg.png",
      alt: "Balls foreground",
      depth: 0.4,
      zIndex: 3,
    },
    {
      src: "/imgs/paralax-title/services.png",
      alt: "Creator Thinker",
      depth: 0.6,
      zIndex: 4,
    },
  ];

  return (
    <section
      className="faded bg-drkblue/50 relative px-4 py-20 pb-10 md:py-40 md:pb-50"
      id="services"
    >
      <header className="z-10 mx-auto mb-8 w-full max-w-[700px]">
        <TitleParalax LAYERS={layers} />
      </header>

      <section className="mx-auto mt-0 mb-10 max-w-[800px] p-8">
        {serviceList.map((service: ServiceType, index: number) => {
          if (index % 2 == 0) {
            return renderLeftContentImage(service);
          } else {
            return renderRightContentImage(service);
          }
        })}
      </section>
    </section>
  );
}
