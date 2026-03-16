import AnimateBlock from "@/src/utils/animateBlock";
import { client } from "@/src/utils/sanity";
import HeroParallax from "./HeroParallax";
import HomeContent from "./HomeContent";

export default async function HomeIntro() {
  const data = await client.fetch(
    `*[_type == "home" && _id == "home"][0] {
        title,
        hero,
        content
      }`,
  );

  return (
    <section className="home mx-auto my-14 max-w-7xl items-center md:mb-0 md:grid md:min-h-[80vh] md:grid-cols-[1.2fr_1fr] lg:grid-cols-[1.5fr_1fr]">
      <AnimateBlock delay={0.1}>
        <div className="relative">
          <HeroParallax />
          <div className="absolute right-[25%] bottom-10 z-[1] h-[60%] w-[50%] rounded-full bg-blue-300/10 blur-[100px] dark:bg-blue-500/30" />
        </div>
      </AnimateBlock>
      <HomeContent data={data} />
    </section>
  );
}
