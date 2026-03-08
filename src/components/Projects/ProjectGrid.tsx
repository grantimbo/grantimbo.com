"use client";

import { shimmer, toBase64 } from "@/src/utils/BlurData";
import { urlFor } from "@/src/utils/sanity";
import { Project } from "@/src/utils/types";
// import { getImageDimensions } from "@sanity/asset-utils";
// import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <section className="mx-auto block w-full max-w-6xl pb-[100px]">
      <section className="grid grid-cols-2 gap-4 p-5 sm:grid-cols-3 lg:grid-cols-4">
        {projects.map((prj, i) => (
          <article
            key={`${prj.slug}_${i}`}
            title={prj.title}
            className="group bg-blue relative cursor-pointer rounded-lg transition-all duration-300"
          >
            {/* The Pulse Glow Layer */}
            <div className="to-eggblue group-hover:animate-pulse-glow absolute -inset-1 z-0 rounded-lg bg-gradient-to-r from-blue-600 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
            <Link
              href={`/projects/${prj.categorySlug}/${prj.slug}`}
              className="bg-blue relative z-10 block overflow-hidden rounded-lg border-2 border-blue-600/10 transition-colors hover:border-blue-600"
            >
              <figure className="relative h-full overflow-hidden rounded-lg">
                {prj.thumbnail && (
                  <Image
                    src={urlFor(prj.thumbnail).width(300).height(300).url()}
                    width={300}
                    height={300}
                    alt={prj.title}
                    placeholder={`data:image/svg+xml;base64,${toBase64(
                      shimmer(300, 300),
                    )}`}
                    sizes="(max-width: 500px) 25vw, (max-width: 768px) 100vw"
                    className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                )}

                {/* Overlay text */}
                <div className="absolute bottom-0 flex w-full items-center justify-between bg-linear-to-t from-[#07102c] to-transparent px-2 pt-12 pb-1 text-white">
                  <p className="text-[0.8rem] font-light">{prj.title}</p>
                </div>
              </figure>
            </Link>
          </article>
        ))}
      </section>
    </section>
  );
}
