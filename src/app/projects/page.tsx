import BreadCrumbs from "@/src/components/BreadCrumbs";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import FeaturedProjects from "@/src/components/Home/FeaturedProjects";
import ProjectGrid from "@/src/components/Projects/ProjectGrid";
import ProjectHeader from "@/src/components/Projects/ProjectHeader";
import { client } from "@/src/utils/sanity";
import { Project } from "@/src/utils/types";
import type { Metadata } from "next";
import { cache } from "react";

export const metadata: Metadata = {
  title: "Projects",
};

// const getProjects = cache(async (): Promise<Project[]> => {
//   const data = await client.fetch<Project[]>(
//     `*[_type == "project"] | order(releaseDate desc){
//      title,
//     "slug": slug.current,
//     releaseDate,
//     tags,
//     thumbnail,
//     "categoryName": category->title,
//     "category":  category->slug.current,
//   }`,
//   );
//   return data ?? [];
// });

export default async function Projects() {
  // const projects = await getProjects();
  return (
    <>
      <Header />
      <ProjectHeader title={"Projects"}>
        <BreadCrumbs currentPage="Projects" />
      </ProjectHeader>
      {/* <ProjectGrid projects={projects} /> */}
      <FeaturedProjects hideHeader />
      <Footer />
    </>
  );
}
