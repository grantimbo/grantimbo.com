"use client";

import { ProjectContext } from "@/utils/projectContext";

import { shimmer, toBase64 } from "@/utils/BlurData";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export default function ProjectGrid() {
  const ctx = useContext(ProjectContext);

  return (
    <section className="projects-list">
      {ctx?.project.map((prj: any, i: number) => (
        <article key={prj.slug} title={prj.title}>
          <Link href={`/projects/${prj.slug}`}>
            <motion.figure
              animate={{ opacity: 1, y: 0, scale: 1 }}
              initial={{ opacity: 0, y: -20, scale: 0.5 }}
              transition={{ delay: i * 0.04 }}
            >
              <Image
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
              <div className="details">
                <p>{prj.title}</p>
              </div>
            </motion.figure>
          </Link>
        </article>
      ))}
    </section>
  );
}
