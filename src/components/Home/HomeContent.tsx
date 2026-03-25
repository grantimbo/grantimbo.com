"use client";

import { AnimatedPortableText } from "@/src/utils/PortableText";
import AnimateBlock from "@/src/utils/animateBlock";

interface HomeContentProps {
  data: {
    title: string;
    content: any;
  };
}

export default function HomeContent({ data }: HomeContentProps) {
  return (
    <section className="md:flex md:items-center" id="home">
      <article className="m-0 mx-auto max-w-[450px] px-8 text-center text-[0.9rem] leading-tight md:max-w-[490px] md:text-left lg:text-[1rem] [&_h2]:mb-4 [&_p]:mb-2 [&_p]:text-blue-300/40">
        <AnimateBlock delay={0.3}>
          <h2 className="mx-auto max-w-[220px] text-xl font-semibold text-white! md:mx-0 md:max-w-[340px] md:text-3xl">
            {data?.title}
          </h2>
        </AnimateBlock>

        <div className="space-y-4">
          <AnimateBlock delay={0.4}>
            <AnimatedPortableText value={data?.content} />
          </AnimateBlock>

          <div className="mt-10 flex justify-center space-x-2 md:justify-start">
            <AnimateBlock delay={0.6}>
              <a
                href="#projects"
                className="cursor-pointer rounded-full bg-[#0a2d74] px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-[#0869ac]"
              >
                Projects
              </a>
            </AnimateBlock>
            <AnimateBlock delay={0.8}>
              <a
                href="#experience"
                className="cursor-pointer rounded-full border-2 border-[#0a2d74] px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-[#0869ac]"
              >
                Resume
              </a>
            </AnimateBlock>
          </div>
        </div>
      </article>
    </section>
  );
}
