import aboutBg from "@/public/imgs/about-head-lg.png";
import { shimmer, toBase64 } from "@/src/utils/BlurData";
// import AnimateBlock from "@/src/utils/animateBlock";
// import { motion } from "framer-motion";
import Image from "next/image";
import { client, urlFor } from "@/src/utils/sanity";
import { sanityComponents } from "@/src/utils/PortableText";
import { PortableText } from "next-sanity";
import ContactForm from "../Contact/ContactForm";

export default async function AboutContents() {
  const data = await client.fetch(
    `*[_type == "about" && _id == "about"][0] {
          title,
          hero,
          content
        }`,
  );

  return (
    <>
      <section className="mx-auto max-w-[1066px]">
        <figure>
          <Image
            alt="Creator Thinker"
            src={data.hero ? urlFor(data.hero).url() : aboutBg}
            placeholder={`data:image/svg+xml;base64,${toBase64(
              shimmer(1066, 574, "#090e20", "#0f1429"),
            )}`}
            sizes="(max-width: 500px) 50vw, (max-width: 768px) 100vw"
            quality={100}
            width={1066}
            height={574}
          />
        </figure>
      </section>

      <section className="mx-auto mt-10 mb-36 max-w-xl">
        <article className="p-8">
          {/* <AnimateBlock delay={0.3}> */}
          <h2 className="mb-2 text-2xl font-bold text-white md:mb-6 md:text-3xl">
            {data?.title}
          </h2>
          {/* </AnimateBlock> */}

          <div className="leading-tight lg:text-base lg:leading-tight">
            <PortableText value={data?.content} components={sanityComponents} />
          </div>
          <ContactForm />
        </article>
      </section>
    </>
  );
}
