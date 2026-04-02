import projectsType from "@/public/imgs/projects.png";
import { shimmer, toBase64 } from "@/src/utils/BlurData";
import { client, urlFor } from "@/src/utils/sanity";
import { Project } from "@/src/utils/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TitleParalax from "./TitleParalax";

export default async function FeaturedProjects({
  hideHeader = false,
}: {
  hideHeader?: boolean;
}) {
  const projectCats = await client.fetch<Project[]>(
    `*[_type == "category"] | order(date desc)`,
  );

  const layers = [
    {
      src: "/imgs/paralax-title/balls-sm.png",
      alt: "Balls background",
      depth: 0.2,
      zIndex: 1,
    },

    {
      src: "/imgs/paralax-title/projects.png",
      alt: "Grant Imbo Projects",
      depth: 0.6,
      zIndex: 4,
    },
  ];

  return (
    <section
      id="projects"
      className={`faded bg-drkblue/50 relative flex flex-col items-center px-4 py-4 md:px-20 ${!hideHeader ? "md:py-40" : "md:py-5"}`}
    >
      {!hideHeader && (
        <figure className="relative z-10 w-full max-w-[700px]">
          <TitleParalax LAYERS={layers} />
        </figure>
      )}
      <section className="relative z-10 mb-10 grid max-w-6xl grid-cols-2 gap-2 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
        {projectCats?.map((x) => (
          <article
            key={x?.title}
            /* Added 'group' clasxxxs here to track hover state for children */
            className="group bg-drkblue3 hover:bg-drkblue relative rounded-lg border-2 border-blue-600/40 transition-all duration-300 hover:border-blue-600"
          >
            <Link
              href={`/projects/${x?.slug?.current}`}
              className="relative z-30 overflow-hidden no-underline!"
            >
              <div className="overflow-hidden rounded-t-lg">
                {x.thumbnail && (
                  <Image
                    className="w-full opacity-90 transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-100"
                    alt={x?.title || "Project Thumbnail"}
                    src={urlFor(x?.thumbnail).width(500).height(400).url()}
                    placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(500, 400))}`}
                    quality={100}
                    width={500}
                    height={400}
                  />
                )}
              </div>

              <div className="p-2 md:p-4">
                <h2 className="mb-1 text-lg font-bold text-white md:mb-4 md:text-2xl">
                  {x?.title}
                </h2>
                <p className="mb-2 text-[0.8rem] leading-tight font-light text-slate-400">
                  {x?.description}
                </p>
                {x?.tags && x.tags.length > 0 && (
                  <div className="flex flex-wrap">
                    {x.tags.map((tag) => (
                      <span
                        key={tag}
                        className="mr-[0.1rem] mb-[.16rem] inline-block rounded-full border border-blue-800 bg-blue-800/30 px-[.3rem] text-[.52rem] text-blue-200/60 transition-all duration-300 group-hover:border-blue-300/50 group-hover:bg-blue-600/20 group-hover:text-blue-300 sm:text-[.7rem] md:mr-[0.3rem] md:mb-[0.3rem] md:px-[.5rem] md:py-[0.2rem] md:text-[0.65rem]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
            <div className="absolute -inset-1 z-0 rounded-lg bg-gradient-to-r from-blue-600/30 to-blue-400/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-80" />
          </article>
        ))}
      </section>
    </section>
  );
}
