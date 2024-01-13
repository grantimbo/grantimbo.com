import Analytics from "@/components/Analytics";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeExperience from "@/components/Home/HomeExperience";
import HomeFeaturedProjects from "@/components/Home/HomeFeaturedProjects";
import HomeIntro from "@/components/Home/HomeIntro";

export default function Home() {
  return (
    <>
      <Analytics title={"Home"} />
      <Header hidemenu={true} />
      <HomeIntro />
      <HomeExperience />
      <HomeFeaturedProjects />
      <Footer />
    </>
  );
}
