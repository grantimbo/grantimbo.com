import Header from "@/components/Header";
import ModalContents from "@/components/ModalContents";
import ProjectWrap from "@/components/ProjectWrap";
import { projects } from "@/public/_projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proj",
};

export default function Projects({ params }: { params: { slug: string } }) {
  return (
    <>
      <Header />
      <ProjectWrap />
      <ModalContents slug={params.slug} post={projects} />
    </>
  );
}
