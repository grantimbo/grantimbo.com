"use client";

import { shimmer, toBase64 } from "@/utils/BlurData";
import filtereDProjects from "@/utils/filterProjects";
import { urlFor } from "@/utils/imageBuilder";
import { ProjectContext } from "@/utils/projectContext";
import { getImageDimensions } from "@sanity/asset-utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function ProjectGrid() {
  const router = useRouter();
  const ctx = useContext(ProjectContext);

  const openModal = (link: string) => {
    ctx?.setLoading(true);
    router.push(link);
  };

  return (
    <section className="block w-full pb-[100px] pt-[60px] md:pl-[250px]">
      {ctx?.project.length === 0 && (
        <div className="inline-flex h-[70vh] w-full items-center justify-center gap-2 p-10">
          <div className="loader sm" />
          <div className="text-lg text-[#bbd5ef]">Loading...</div>
        </div>
      )}

      <section className="grid grid-cols-2 gap-4 p-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7">
        {filtereDProjects()?.map((prj: any, i: number) => (
          <motion.article
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            transition={{ delay: i * 0.04 }}
            key={prj.slug.current}
            title={prj.title}
            className=" cover relative cursor-pointer overflow-hidden rounded-lg border-2 border-eggblue border-eggblue/10 bg-blue before:mt-[100%] before:block before:content-[''] hover:border-eggblue "
          >
            <div
              onClick={() => openModal(`/projects/${prj.slug.current}`)}
              className="absolute bottom-0 left-0 right-0 top-0 block "
            >
              <figure className="relative h-full">
                <Image
                  src={urlFor(prj.thumbnail).url()}
                  width={getImageDimensions(prj.thumbnail).width}
                  height={getImageDimensions(prj.thumbnail).height}
                  alt={prj.title}
                  placeholder={`data:image/svg+xml;base64,${toBase64(
                    shimmer(100, 100),
                  )}`}
                  sizes="(max-width: 500px) 25vw, (max-width: 768px) 100vw"
                />
                <div className="absolute bottom-0 flex w-full items-center justify-between bg-gradient-to-t from-[#07102c] to-transparent px-4 pt-[2rem] text-white">
                  <p className="text-[0.8rem] font-light">{prj.title}</p>
                </div>
              </figure>
            </div>
          </motion.article>
        ))}
      </section>
    </section>
  );
}
