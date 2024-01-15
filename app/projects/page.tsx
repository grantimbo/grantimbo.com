import Header from "@/components/Header";
import ProjectWrap from "@/components/Projects/ProjectWrap";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Projects",
};

export default async function Projects() {
  return (
    <>
      <Header fixed={true} />
      <ProjectWrap />
    </>
  );
}
