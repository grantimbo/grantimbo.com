"use client";

import { shimmer, toBase64 } from "@/utils/BlurData";
import { ProjectContext } from "@/utils/projectContext";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export default function ProjectGrid() {
  const ctx = useContext(ProjectContext);

  return (
    <section className="grid grid-cols-2 gap-4 p-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7">
      {ctx?.project.map((prj: any, i: number) => (
        <motion.article
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ delay: i * 0.04 }}
          key={prj.slug}
          title={prj.title}
          className="cover relative overflow-hidden rounded-lg border-2 border-eggblue border-eggblue/10 bg-blue before:mt-[100%] before:block before:content-[''] hover:border-eggblue "
        >
          <Link
            href={`/projects/${prj.slug}`}
            className="absolute bottom-0 left-0 right-0 top-0 block "
          >
            <figure className="relative h-full">
              <Image
                className="relative block h-auto w-full"
                alt={prj?.title}
                src={prj?.thumbnail}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(100, 100),
                )}`}
                quality={100}
                width={300}
                height={300}
              />
              <div className="absolute bottom-0 flex w-full items-center justify-between bg-gradient-to-t from-[#07102c] to-transparent px-4 pt-[2rem] text-white">
                <p className="text-[0.8rem] font-light">{prj.title}</p>
              </div>
            </figure>
          </Link>
        </motion.article>
      ))}
    </section>
  );
}
