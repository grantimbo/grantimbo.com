import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { shimmer, toBase64 } from "../utils/BlurData";

export default function ProjectGrid(props) {
  const projects = props?.post;

  return (
    <section className="projects-list">
      {projects?.map((project, i) => (
        <article key={project.title} title={project.title}>
          <Link
            href={`/projects?tag=${props?.cat}&slug=${project.slug}`}
            as={`/projects/${project.slug}`}
          >
            <motion.figure
              animate={{ opacity: 1, y: 0, scale: 1 }}
              initial={{ opacity: 0, y: -20, scale: 0.5 }}
              transition={{ delay: i * 0.04 }}
            >
              <Image
                alt={project?.title}
                src={project?.thumbnail}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(100, 100),
                )}`}
                quality={100}
                width={300}
                height={300}
              />
              <div className="details">
                <p>{project.title}</p>
              </div>
            </motion.figure>
          </Link>
        </article>
      ))}
    </section>
  );
}
