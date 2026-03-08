import Header from "@/src/components/Header";
import ProjectGrid from "@/src/components/Projects/ProjectGrid";
import { client } from "@/src/utils/sanity";
import { ParamsType, Project } from "@/src/utils/types";
import type { Metadata } from "next";
import { cache } from "react";
import NotFoundPage from "../../not-found";
import BreadCrumbs from "@/src/components/BreadCrumbs";
import ProjectHeader from "@/src/components/Projects/ProjectHeader";

export const metadata: Metadata = {
  title: "Projects",
};

const getProjects = cache(async (category: string) => {
  const data = await client.fetch<Project[]>(
    `*[_type == "project" && category->slug.current == $categorySlug] | order(releaseDate desc) {
    title,
    "slug": slug.current,
    releaseDate,
    tags,
    thumbnail,
    "categoryName": category->title,
    "category":  category->slug.current,
  }`,
    { categorySlug: String(category) },
  );

  return data ?? [];
});

export default async function ProjectCategory({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const data = await getProjects(category);

  return (
    <>
      <Header />
      <ProjectHeader title={data[0]?.categoryName}>
        <BreadCrumbs
          parentPageLink="/projects"
          parentPage="Projects"
          currentPage={data[0]?.categoryName || "No Projects"}
        />
      </ProjectHeader>
      <ProjectGrid projects={data} />
    </>
  );
}
