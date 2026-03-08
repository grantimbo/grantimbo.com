import Header from "@/src/components/Header";
import ProjectContent from "@/src/components/Projects/ProjectContent";
import { client, urlFor } from "@/src/utils/sanity";
import { ParamsType, Project } from "@/src/utils/types";
import { Metadata } from "next";
import { unstable_noStore as noStore } from "next/cache";
import { cache } from "react";
import NotFoundPage from "../../../not-found";
import BreadCrumbs from "@/src/components/BreadCrumbs";
import ProjectHeader from "@/src/components/Projects/ProjectHeader";

const getProjectBySlug = cache(async (slug: string) => {
  if (!slug || typeof slug !== "string") return null;
  const data = await client.fetch<Project[]>(
    `*[_type == "project" && slug.current == $slug] {
       title, 
      "slug": slug.current, 
      releaseDate, 
      tags,
      content,
      gallery,
      thumbnail,
      "categoryName": category->title,
      "categorySlug":  category->slug.current,
    }`,
    { slug: String(slug) },
  );
  return data?.[0] ?? null;
});

export async function generateMetadata({
  params,
}: ParamsType): Promise<Metadata> {
  const { slug } = await params;
  const data = await getProjectBySlug(slug);

  if (!data) {
    return { title: `Player Not Found - Grant Imbo` };
  }

  return {
    title: data.title,
    description: `${data.title} — a project by Grant Imbo`,
    openGraph: data.thumbnail
      ? { images: [urlFor(data.thumbnail).url()] }
      : undefined,
  };
}

export default async function ProjectPage({ params }: ParamsType) {
  const { slug } = await params;
  const data = await getProjectBySlug(slug);

  if (!data) return <NotFoundPage />;

  return (
    <>
      <Header />
      <ProjectHeader title={data?.title}>
        <BreadCrumbs
          parentPageLink="/projects"
          parentPage="Projects"
          parentPage2={data?.categoryName}
          parentPageLink2={`/projects/${data?.categorySlug}`}
          currentPage={data?.title}
        />
      </ProjectHeader>
      <ProjectContent data={data} />
    </>
  );
}
