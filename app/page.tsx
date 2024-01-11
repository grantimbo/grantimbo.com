import Analytics from "@/components/Analytics";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeIntro from "@/components/HomeIntro";

export default function Home() {
  return (
    <>
      <Analytics title={"Home"} />
      <Header hidemenu={true} />
      <HomeIntro />
      <Experience />
      <FeaturedProjects />
      <Footer />
    </>
  );
}
