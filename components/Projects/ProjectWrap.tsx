"use client";

import ModalContents from "@/components/Projects/ModalContents";
import ProjectGrid from "@/components/Projects/ProjectGrid";
// import ProjectSidebar from "@/components/Projects/ProjectSidebar";
import { ProjectContext } from "@/utils/projectContext";
import { useContext } from "react";

export default function ProjectWrap() {
  const ctx = useContext(ProjectContext);
  return (
    <main>
      {/* <ProjectSidebar /> */}
      <ProjectGrid />
      {ctx?.loading && <ModalContents data={null} />}
    </main>
  );
}
