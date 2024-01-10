import Header from "@/components/Header";
import ModalContents from "@/components/ModalContents";
import ProjectWrap from "@/components/ProjectWrap";
import { projects } from "@/public/_projects";
import ProjectContextProvider from "@/utils/projectContext";
import { Metadata, ResolvingMetadata } from "next";

interface ParamsType {
  params: {
    slug: string;
  };
}

// interface ProjectType {
//   title: string;
//   slug: string;
//   date: string;
//   tags: string[];
//   thumbnail: string;
//   content: string;
// }

// export async function generateMetadata(
//   { params }: ParamsType,
//   parent: ResolvingMetadata,
// ): Promise<Metadata> {
//   const project: ProjectType[] = projects;
//   const filteredProject: ProjectType | undefined = project.find(
//     (e) => e.slug === params.slug,
//   );

//   return {
//     title: filteredProject?.title,
//     // openGraph: {
//     //   images: ["/some-specific-page-image.jpg", ...previousImages],
//     // },
//   };
// }

export default function Projects({ params }: ParamsType) {
  return (
    <>
      <Header fixed={true} />
      <ProjectWrap />
      <ModalContents slug={params.slug} />
    </>
  );
}
