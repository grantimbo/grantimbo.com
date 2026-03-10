import homeBg from "@/public/imgs/home-bg-lg.png";
import { shimmer, toBase64 } from "@/src/utils/BlurData";
import { AnimatedPortableText } from "@/src/utils/PortableText";
import AnimateBlock from "@/src/utils/animateBlock";
import { client, urlFor } from "@/src/utils/sanity";
import Image from "next/image";

export default async function HomeIntro() {
  const data = await client.fetch(
    `*[_type == "home" && _id == "home"][0] {
        title,
        hero,
        content
      }`,
  );

  return (
    <section className="home mx-auto my-20 mb-20 max-w-7xl items-center md:mb-0 md:grid md:min-h-[60vh] md:grid-cols-[1.2fr_1fr] lg:grid-cols-[1.5fr_1fr]">
      <figure>
        <Image
          alt="Creator Thinker"
          src={data.hero ? urlFor(data.hero).url() : homeBg}
          sizes="(max-width: 450px) 50vw, (max-width: 768px) 100vw"
          placeholder={`data:image/svg+xml;base64,${toBase64(
            shimmer(1104, 930, "#090e20", "#0f1429"),
          )}`}
          quality={100}
          width={1104}
          height={930}
        />
      </figure>
      <section className="md:flex md:items-center">
        <article className="m-0 mx-auto max-w-[450px] px-8 text-center text-[0.9rem] leading-tight md:max-w-[490px] md:text-left lg:text-[1rem] [&_*]:text-blue-300/40 [&_h2]:mb-4 [&_p]:mb-2">
          <AnimateBlock delay={0.3}>
            <h2 className="mx-auto max-w-[220px] text-xl font-semibold text-white! md:mx-0 md:max-w-[270px] lg:text-2xl">
              {data?.title}
            </h2>
          </AnimateBlock>

          <div className="space-y-4">
            <AnimatedPortableText value={data?.content} />
          </div>
        </article>
      </section>
    </section>
  );
}
