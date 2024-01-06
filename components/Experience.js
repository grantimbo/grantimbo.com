import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { experiences } from "../public/_experience";
import experienceType from "../public/imgs/experience.png";
import { shimmer, toBase64 } from "../utils/BlurData";

export default function Experience() {
  return (
    <section className="experience">
      <motion.figure
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.95 }}
        transition={{
          duration: 0.4,
        }}
      >
        <Image
          alt="Experience"
          src={experienceType}
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
        <section>
          {experiences?.map((x) => (
            <article key={x?.title} className="experience-card">
              <div className="xThumb">
                <figure>
                  <Image
                    alt="Experience"
                    src={x?.thumbnail}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      shimmer(100, 100),
                    )}`}
                    quality={100}
                    width={600}
                    height={358}
                  />
                </figure>
                <p>{x?.date}</p>
              </div>
              <div className="xDetails">
                <h2>{x?.title}</h2>
                <div className="comp">
                  <h3>{x?.company}</h3>
                  {x?.partime && <span>(Part-time)</span>}
                </div>

                <p>{x?.description}</p>
                <div className="tags">
                  {x?.tags?.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>
      </section>
      <Link href={"/résumé_2023.pdf"} target="_blank" className="btn">
        View Full Résumé
      </Link>
    </section>
  );
}
