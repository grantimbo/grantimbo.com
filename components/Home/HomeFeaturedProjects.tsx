"use client";

import { featured_projects } from "@/public/_featured_projects";
import projectsType from "@/public/imgs/projects.png";
import { shimmer, toBase64 } from "@/utils/BlurData";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ReactGA from "react-ga4";

export default function HomeFeaturedProjects() {
  ReactGA.initialize("G-40N9DDPQQT");
  const router = useRouter();

  const viewProjectArchive = () => {
    ReactGA.event({
      category: `Button Clicks`,
      action: `Download Resume`,
    });

    router.push("/projects?tag=all");
  };

  return (
    <section className="relative flex flex-col items-center px-8 py-4 md:px-20">
      <motion.figure
        className="w-full max-w-[700px]"
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.95 }}
        transition={{
          duration: 0.4,
        }}
      >
        <Image
          alt="Experience"
          src={projectsType}
          placeholder={`data:image/svg+xml;base64,${toBase64(
            shimmer(753, 305),
          )}`}
          quality={100}
          width={753}
          height={305}
        />
      </motion.figure>
      <section className="mb-10 grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featured_projects?.map((x) => (
          <article
            key={x?.title}
            className="overflow-hidden rounded-md border-2 border-eggblue/20 bg-blue hover:border-eggblue hover:bg-blue/60"
          >
            <Link href={x?.link} target={x?.target} className="!no-underline">
              <Image
                className="w-full"
                alt="Experience"
                src={x?.thumbnail}
                placeholder={`data:image/svg+xml;base64,${toBase64(
                  shimmer(500, 298),
                )}`}
                quality={100}
                width={500}
                height={298}
              />
              <div className="p-4">
                <h2 className="mb-[0.3rem] text-[1.2rem] font-medium text-white">
                  {x?.title}
                </h2>

                <p className="mb-2 text-[0.8rem] font-light leading-tight text-softgray">
                  {x?.description}
                </p>
                <div className="tags">
                  {x?.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="mb-[0.3rem] mr-[0.3rem] inline-block rounded-full bg-eggblue/20 px-4 py-[0.3rem] text-[0.7rem] text-eggblue"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </section>
      <button onClick={viewProjectArchive} className="button">
        👉 Project Archive
      </button>
    </section>
  );
}
