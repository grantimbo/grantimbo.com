import Analytics from "@/components/Analytics";
import Header from "@/components/Header";
import ProjectWrap from "@/components/ProjectWrap";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Projects() {
  return (
    <>
      <Analytics title="Projects" />
      <Header fixed={true} />
      <ProjectWrap />
    </>
  );
}
