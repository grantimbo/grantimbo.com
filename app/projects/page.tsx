import Header from "@/components/Header";
import ProjectWrap from "@/components/ProjectWrap";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Projects() {
  return (
    <>
      <Header fixed={true} />
      <ProjectWrap />
    </>
  );
}
