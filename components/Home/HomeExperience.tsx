"use client";

import { experiences } from "@/public/_experience";
import experienceType from "@/public/imgs/experience.png";
import { shimmer, toBase64 } from "@/utils/BlurData";
import ProjectContextProvider from "@/utils/projectContext";
import { motion } from "framer-motion";
import Image from "next/image";
import ReactGA from "react-ga4";

export default function HomeExperience() {
  ReactGA.initialize("G-40N9DDPQQT");

  const downloadResume = () => {
    ReactGA.event({
      category: `Button Clicks`,
      action: `Download Resume`,
    });

    window.open("/résumé_2023.pdf", "_ blank");
  };

  return (
    <ProjectContextProvider>
      <section className="experience relative flex flex-col items-center bg-blue px-4 py-20">
        <motion.figure
          className="z-10 w-full max-w-[700px]"
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{
            duration: 0.4,
          }}
        >
          <Image
            alt="Experience"
            src={experienceType}
            placeholder={`data:image/svg+xml;base64,${toBase64(
              shimmer(753, 305),
            )}`}
            quality={100}
            width={753}
            height={305}
          />
        </motion.figure>
        <section className="relative mb-12">
          <section className="max-h-[650px] max-w-[700px] overflow-hidden overflow-y-auto p-4 pb-16 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[10rem] after:bg-gradient-to-t after:from-[#0d1a43] after:to-transparent after:content-['']">
            {experiences?.map((x) => (
              <article
                key={x?.title}
                className="mb-4 flex flex-col rounded-xl border-2 border-eggblue/30 bg-darkblue px-4 py-[1.6rem] hover:border-eggblue hover:bg-darkblue/50 md:flex-row md:gap-4"
              >
                <div className="flex min-w-[130px] flex-col justify-center gap-[0.4rem] md:items-center">
                  <figure className="flex h-[70px] w-[74px] items-center justify-center rounded-md bg-eggblue/30 p-[0.2rem]">
                    <Image
                      alt="Experience"
                      src={x?.thumbnail}
                      placeholder={`data:image/svg+xml;base64,${toBase64(
                        shimmer(100, 100),
                      )}`}
                      quality={100}
                      width={100}
                      height={100}
                    />
                  </figure>
                  <p className="text-[0.7rem] text-softgray">{x?.date}</p>
                </div>
                <div>
                  <h2 className="mb-[0.3rem] text-[1.1rem] font-semibold leading-tight text-white md:text-[1.2rem]">
                    {x?.title}
                  </h2>
                  <div className="mb-[0.2rem] flex items-center gap-[0.5rem]">
                    <h3 className="m-0 text-[0.9rem] font-medium text-eggblue">
                      {x?.company}
                    </h3>
                    {x?.partime && (
                      <span className="text-[0.7rem] text-[#5176d1]/80">
                        (Part-time)
                      </span>
                    )}
                  </div>

                  <p className="mb-2 text-[0.7rem] leading-tight text-softgray md:text-[0.8rem] ">
                    {x?.description}
                  </p>
                  <div>
                    {x?.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="mb-[0.3rem] mr-[0.3rem] inline-block rounded-full bg-eggblue/20 px-4 py-[0.3rem] text-[0.7rem] text-eggblue"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </section>
        </section>
        <button onClick={downloadResume} className="button z-10">
          👉 Full Résumé
        </button>
      </section>
    </ProjectContextProvider>
  );
}
