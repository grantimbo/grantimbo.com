"use client";

import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeIntro from "@/components/HomeIntro";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>{"Grant Imbo"}</title>
      </Head>

      <Header hidemenu={true} fixed={false} />

      <HomeIntro />
      <Experience />
      <FeaturedProjects />
      <Footer />
    </>
  );
}
