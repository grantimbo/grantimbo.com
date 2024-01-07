"use client";

import Header from "@/components/Header";
import serviceBg from "@/public/imgs/services-head-lg.png";
import margetingImg from "@/public/imgs/services/email-marketing-lg.png";
import designImg from "@/public/imgs/services/graphic-design-lg.png";
import prodRenImg from "@/public/imgs/services/product-renders-lg.png";
import vidProdImg from "@/public/imgs/services/video-production-lg.png";
import webAppsImg from "@/public/imgs/services/website-apps-lg.png";
import { shimmer, toBase64 } from "@/utils/BlurData";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ServicesContents() {
  const fadeIninitial = { opacity: 0, scale: 0.95 };
  const fadeInanimate = { opacity: 1, scale: 1 };
  const dropIninitial = { opacity: 0, y: -20 };
  const dropInanimate = { opacity: 1, y: 0 };

  return (
    <>
      <section className="head">
        <motion.figure
          animate={fadeInanimate}
          initial={fadeIninitial}
          transition={{
            duration: 0.4,
          }}
        >
          <Image
            alt="Services Thinker"
            src={serviceBg}
            placeholder="blur"
            quality={100}
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(100, 100),
            )}`}
            width={1066}
            height={574}
          />
        </motion.figure>
      </section>

      <section className="service">
        <article>
          <motion.div
            className="serviceImg"
            animate={fadeInanimate}
            initial={fadeIninitial}
            transition={{
              duration: 0.4,
              delay: 0.3,
            }}
          >
            <Image
              alt="Graphic Design"
              placeholder="blur"
              src={designImg}
              width={323}
              height={323}
              quality={100}
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(100, 100),
              )}`}
            />
          </motion.div>
          <div className="flex">
            <div>
              <motion.h3
                animate={dropInanimate}
                initial={dropIninitial}
                transition={{
                  delay: 0.3,
                }}
              >
                Graphic Design
              </motion.h3>
              <motion.p
                animate={dropInanimate}
                initial={dropIninitial}
                transition={{
                  delay: 0.4,
                }}
              >
                Product labels, posters, banners, logos, brochures, ebooks or
                any visual expressions.
              </motion.p>
            </div>
          </div>
        </article>

        <article>
          <div className="flex">
            <div>
              <motion.h3
                animate={dropInanimate}
                initial={dropIninitial}
                transition={{
                  delay: 0.6,
                }}
              >
                Website & Apps
              </motion.h3>
              <motion.p
                animate={dropInanimate}
                initial={dropIninitial}
                transition={{
                  delay: 0.7,
                }}
              >
                API driven websites and apps using the latest technologies and
                frameworks.
              </motion.p>
            </div>
          </div>
          <motion.div
            className="serviceImg"
            animate={fadeInanimate}
            initial={fadeIninitial}
            transition={{
              duration: 0.5,
              delay: 0.4,
            }}
          >
            <Image
              alt="Websites and Apps"
              placeholder="blur"
              src={webAppsImg}
              width={323}
              height={323}
              quality={100}
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(100, 100),
              )}`}
            />
          </motion.div>
        </article>

        <article>
          <motion.div
            className="serviceImg"
            animate={fadeInanimate}
            initial={fadeIninitial}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
          >
            <Image
              alt="Product Renders"
              placeholder="blur"
              src={prodRenImg}
              width={323}
              height={323}
              quality={100}
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(100, 100),
              )}`}
            />
          </motion.div>
          <div className="flex">
            <div>
              <h3>Product Renders</h3>
              <p>
                High quality realistic product 3D renderings that will increase
                your sales on Amazon.
              </p>
            </div>
          </div>
        </article>

        <article>
          <div className="flex">
            <div>
              <h3>Video Production</h3>
              <p>
                Logo intro reveal, Explainer videos, Motion design in 2D/3D or a
                simple VFX animation.
              </p>
            </div>
          </div>
          <div className="serviceImg">
            <Image
              alt="Video Production"
              placeholder="blur"
              src={vidProdImg}
              width={323}
              height={323}
              quality={100}
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(100, 100),
              )}`}
            />
          </div>
        </article>

        <article>
          <div className="serviceImg">
            <Image
              alt="Email Marketing"
              placeholder="blur"
              src={margetingImg}
              width={323}
              height={323}
              quality={100}
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(100, 100),
              )}`}
            />
          </div>
          <div className="flex">
            <div>
              <h3>Marketing</h3>
              <p>
                Generate leads, Run a webinar, Sell your products and leverage
                the power of social media marketing.
              </p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
