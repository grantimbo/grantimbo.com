import ContactForm from "@/src/components/Contact/ContactForm";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import Experiences from "@/src/components/Home/Experience";
import HomeFeaturedProjects from "@/src/components/Home/FeaturedProjects";
import HomeIntro from "@/src/components/Home/HomeIntro";

export default function Home() {
  return (
    <>
      <Header />
      <HomeIntro />
      <HomeFeaturedProjects />
      <Experiences />
      <ContactForm />
      <Footer />
    </>
  );
}
