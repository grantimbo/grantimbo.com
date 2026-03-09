import projectsType from "@/public/imgs/projects.png";
import { shimmer, toBase64 } from "@/src/utils/BlurData";
import { client, urlFor } from "@/src/utils/sanity";
import { Project } from "@/src/utils/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default async function FeaturedProjects({
  hideHeader = false,
}: {
  hideHeader?: boolean;
}) {
  const projectCats = await client.fetch<Project[]>(
    `*[_type == "category"] | order(date desc)`,
  );

  return (
    <section
      className={`faded bg-drkblue relative flex flex-col items-center px-4 py-4 md:px-20 ${!hideHeader ? "md:py-40" : "md:py-5"}`}
    >
      {!hideHeader && (
        <figure className="relative z-10 w-full max-w-[700px]">
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
        </figure>
      )}
      <section className="relative z-10 mb-10 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
        {projectCats?.map((x) => (
          <article
            key={x?.title}
            /* Added 'group' class here to track hover state for children */
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
                <div className="tags">
                  {x?.tags &&
                    x.tags.length > 0 &&
                    x.tags.map((tag) => (
                      <span
                        key={tag}
                        className="mr-[0.2rem] inline-block rounded-full border border-blue-800 bg-blue-800/30 px-4 py-[0.2rem] text-[.55rem] text-blue-200/60 transition-all duration-300 group-hover:border-blue-300/50 group-hover:bg-blue-600/20 group-hover:text-blue-300 md:mr-[0.3rem] md:mb-[0.3rem] md:text-[0.65rem]"
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
      {/* <button onClick= className="button">
        👉 Project Archive
      </button> */}
    </section>
  );
}
