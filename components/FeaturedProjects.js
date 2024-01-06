import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { featured_projects } from "../public/_featured_projects";
import projectsType from "../public/imgs/projects.png";
import { shimmer, toBase64 } from "../utils/BlurData";

export default function FeaturedProjects() {
  return (
    <section className="featured_projects">
      <motion.figure
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.95 }}
        transition={{
          duration: 0.4,
        }}
      >
        <Image
          alt="Experience"
          src={projectsType}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(100, 100),
          )}`}
          quality={100}
          width={753}
          height={305}
        />
      </motion.figure>
      <section>
        {featured_projects?.map((x) => (
          <div key={x?.title}>
            <Link href={x?.link} target={x?.target}>
              <article key={x?.title} className="featured-card">
                <Image
                  alt="Experience"
                  src={x?.thumbnail}
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(100, 100),
                  )}`}
                  quality={100}
                  width={500}
                  height={298}
                />
                <div className="xDetails">
                  <h2>{x?.title}</h2>

                  <p>{x?.description}</p>
                  <div className="tags">
                    {x?.tags?.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          </div>
        ))}
      </section>
      <Link href="/projects?tag=all" className="btn">
        View Full Project Archive
      </Link>
    </section>
  );
}
