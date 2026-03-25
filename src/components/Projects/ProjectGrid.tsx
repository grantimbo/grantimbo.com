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
      {projects.length === 0 && (
        <div className="flex flex-col items-center justify-center px-4 py-24 text-center">
          <p className="mb-4 text-lg font-medium">
            No projects found in this category
          </p>

          <Link
            href="/projects"
            className="group flex w-fit items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-blue-100 transition-all duration-300 hover:bg-blue-600 hover:text-white active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Projects
          </Link>
        </div>
      )}
      <section className="grid grid-cols-2 gap-4 p-5 sm:grid-cols-3 lg:grid-cols-4">
        {projects.map((prj, i) => (
          <article
            key={`${prj.slug}_${i}`}
            title={prj.title}
            className="group bg-blue relative cursor-pointer rounded-lg transition-all duration-300"
          >
            {/* The Pulse Glow Layer */}
            <div className="absolute -inset-1 z-0 rounded-lg bg-gradient-to-r from-blue-600/30 to-blue-400/30 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
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
