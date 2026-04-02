"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { shimmer, toBase64 } from "@/src/utils/BlurData";
import { ServiceType } from "@/src/utils/types";
import TitleParalax from "./TitleParalax";

// Static imports
import marketingImg from "@/public/imgs/services/email-marketing-lg.png";
import designImg from "@/public/imgs/services/graphic-design-lg.png";
import prodRenImg from "@/public/imgs/services/product-renders-lg.png";
import vidProdImg from "@/public/imgs/services/video-production-lg.png";
import webAppsImg from "@/public/imgs/services/website-apps-lg.png";
import Link from "next/link";

const easeOutTransition = (duration: number, delay: number) => ({
  duration,
  delay,
  ease: "easeOut" as const,
});

const ANIM_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (delay: number) => ({
      opacity: 1,
      scale: 1,
      transition: easeOutTransition(0.5, delay),
    }),
  },
  dropIn: {
    hidden: { opacity: 0, y: -20 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: easeOutTransition(0.4, delay),
    }),
  },
};

const PARALAX_LAYERS = [
  {
    src: "/imgs/paralax-title/balls-sm.png",
    alt: "Balls background",
    depth: 0.2,
    zIndex: 1,
  },
  {
    src: "/imgs/paralax-title/services.png",
    alt: "Grant Imbo Services",
    depth: 0.6,
    zIndex: 4,
  },
];

const SERVICE_LIST: ServiceType[] = [
  {
    image: designImg,
    title: "Graphic Design",
    description:
      "Product labels, posters, banners, logos, brochures, ebooks or any visual expressions.",
    slug: "/projects/posters",
  },
  {
    image: webAppsImg,
    title: "Website & Apps",
    description:
      "API driven websites and apps using the latest technologies and frameworks.",
    slug: "/projects/web-dev",
  },
  {
    image: prodRenImg,
    title: "Product Renders",
    description:
      "High quality realistic product 3D renderings that will increase your sales on Amazon.",
    slug: "/projects/branding/product-renders-archive",
  },
  {
    image: vidProdImg,
    title: "Video Production",
    description:
      "Logo intro reveal, Explainer videos, Motion design in 2D/3D or a simple VFX animation.",
    slug: "/projects/motion-graphics",
  },
  {
    image: marketingImg,
    title: "Marketing",
    description:
      "Generate leads, Run a webinar, Sell your products and leverage the power of social media marketing.",
  },
];

const VIEWPORT_CONFIG = { once: true, amount: 0.3 };

type ServiceCardProps = { service: ServiceType; index: number };

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const isEven = index % 2 === 0;
  const baseDelay = 0.4;

  return (
    <article
      className={`mb-12 grid gap-4 md:mb-20 ${!isEven ? "grid-cols-[1.5fr_1fr] text-right" : "grid-cols-[1fr_1.5fr]"}`}
    >
      <motion.div
        className={`max-w-[323px] ${!isEven ? "order-last" : ""}`}
        variants={ANIM_VARIANTS.fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_CONFIG}
        custom={baseDelay}
      >
        <Image
          alt={service.title}
          src={service.image}
          width={323}
          height={323}
          quality={100}
          sizes="(max-width: 450px) 50vw, (max-width: 768px) 100vw"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(323, 323, "#090e20", "#0f1429"))}`}
        />
      </motion.div>

      <div className="flex items-center">
        <div>
          <motion.h3
            className="mb-2 text-base font-medium text-white md:mb-4 md:text-2xl"
            variants={ANIM_VARIANTS.dropIn}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_CONFIG}
            custom={baseDelay + 0.1}
          >
            {service.title}
          </motion.h3>
          <motion.p
            className={`text-xs leading-tight text-blue-300/50 sm:text-sm md:leading-tight ${isEven ? "md:pr-[25%]" : "md:pl-[25%]"}`}
            variants={ANIM_VARIANTS.dropIn}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_CONFIG}
            custom={baseDelay + 0.2}
          >
            {service.description}
          </motion.p>
          {service.slug && (
            <motion.div
              className="mt-4"
              variants={ANIM_VARIANTS.dropIn}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_CONFIG}
              custom={baseDelay + 0.3}
            >
              <Link
                href={service.slug}
                className="button inline-block text-blue-300/80!"
              >
                Featured Works
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </article>
  );
};

export default function HomeServices() {
  return (
    <section
      className="faded bg-drkblue/50 relative px-4 py-20 pb-10 md:py-40 md:pb-50"
      id="services"
    >
      <header className="z-10 mx-auto mb-8 w-full max-w-[700px]">
        <TitleParalax LAYERS={PARALAX_LAYERS} />
      </header>

      <section className="mx-auto mt-0 mb-10 max-w-[800px] p-8">
        {SERVICE_LIST.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </section>
    </section>
  );
}
