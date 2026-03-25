import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import Experiences from "@/src/components/Home/Experience";
import HomeFeaturedProjects from "@/src/components/Home/FeaturedProjects";
import HomeIntro from "@/src/components/Home/HomeIntro";
import HomeContactForm from "../components/Home/HomeContact";
import HomeServices from "../components/Home/HomeServices";

export default function Home() {
  return (
    <>
      <Header />
      <HomeIntro />
      <HomeFeaturedProjects />
      <Experiences />
      <HomeServices />
      <HomeContactForm />
      <Footer fade />
    </>
  );
}
