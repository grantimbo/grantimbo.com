import experienceType from "@/public/imgs/experience.png";
import { shimmer, toBase64 } from "@/src/utils/BlurData";
import Image from "next/image";
import { Experience } from "@/src/utils/types";
import { client, urlFor } from "@/src/utils/sanity";
import { PortableText } from "@portabletext/react";
import { sanityComponents } from "@/src/utils/PortableText";

export default async function Experiences() {
  const experiences = await client.fetch<Experience[]>(
    `*[_type == "experience"] | order(publishedDate desc, date desc)`,
  );

  if (!experiences?.length) {
    return (
      <section className="bg-blue relative flex flex-col items-center px-4 py-20">
        <p className="text-softgray text-center text-sm">
          No experience entries yet.
        </p>
      </section>
    );
  }

  return (
    <section className="relative flex flex-col items-center px-4 py-16 md:py-24">
      <header className="z-10 mb-8 w-full max-w-[700px]">
        <Image
          alt="Experience"
          src={experienceType}
          placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(753, 305))}`}
          quality={100}
          width={753}
          height={305}
          className="w-full object-contain"
        />
      </header>

      <div className="relative w-full max-w-[650px]">
        {/* Vertical timeline line */}
        <div
          className="absolute top-12 bottom-6 left-8 w-[1px] md:left-[40px]"
          aria-hidden
          style={{
            background:
              "linear-gradient(180deg, rgba(187, 213, 239, 0.2), rgba(187, 213, 239, 0.5) 20%, rgba(187, 213, 239, 0.5) 80%, rgba(187, 213, 239, 0.2))",
          }}
        />

        {experiences?.length !== 0 && (
          <ul className="relative space-y-0">
            {experiences?.map((x, index) => (
              <li key={x._id} className="relative flex gap-6 pb-14 last:pb-0">
                {/* Date column */}
                <div className="relative flex w-16 shrink-0 flex-col items-end pt-1.5 md:w-20 md:pt-2">
                  <span className="bg-drkblue3 absolute -left-2 p-2 text-xs font-medium whitespace-nowrap tabular-nums md:top-5 md:-left-18 md:text-sm">
                    {x.date}
                  </span>
                  {index === 0 && (
                    <span className="absolute -top-5 left-2 rounded-full bg-blue-500/20 px-2 py-1 text-[0.55rem] font-medium tracking-wide text-blue-500 uppercase md:top-[28] md:left-15">
                      Latest
                    </span>
                  )}
                </div>

                {/* Node */}
                <div
                  className="absolute top-12 left-6 z-10 h-4 w-4 rounded-full border-2 border-blue-500/70 bg-slate-900 shadow-[0_0_0_3px_rgba(8,14,36,1)] md:top-7 md:left-[31px] md:h-5 md:w-5"
                  aria-hidden
                >
                  <span className="absolute inset-0 rounded-full bg-blue-500/40" />
                </div>

                {/* Card */}
                <article className="timeline-card min-w-0 flex-1 pt-0 pl-2 md:pt-0 md:pl-4">
                  <div className="group bg-drkblue rounded-xl border-2 border-blue-500/50 px-5 py-4 transition-all duration-200 hover:border-blue-600 hover:bg-blue-800/30 md:px-6 md:py-5">
                    <div className="flex gap-4">
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-blue-500/25 bg-blue-900 md:h-14 md:w-14">
                        <Image
                          alt=""
                          src={urlFor(x.thumbnail).width(90).height(90).url()}
                          placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(90, 90))}`}
                          width={90}
                          height={90}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h2 className="text-base leading-tight font-semibold text-white md:text-lg">
                          {x.title}
                        </h2>
                        <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                          {x.companyName && (
                            <span className="text-sm font-medium text-blue-500">
                              {x.companyName}
                            </span>
                          )}
                          <span className="text-softgray text-[.7rem] text-blue-300">
                            ({x.isFulltime ? "Full-time" : "Part-time"})
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 leading-tight [&_p]:text-[0.65rem] [&_p]:text-blue-100/80 [&_p]:md:text-[.75rem]">
                      <PortableText
                        value={x?.content ?? []}
                        components={sanityComponents}
                      />
                    </div>
                    {x.tags && x.tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {x.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-blue-500/15 bg-blue-500/10 px-2 py-0.5 text-[0.7rem] font-medium text-blue-500/90"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
