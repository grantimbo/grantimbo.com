"use client";

import ProjectGrid from "@/components/Projects/ProjectGrid";
import ProjectSidebar from "@/components/Projects/ProjectSidebar";

export default function ProjectWrap() {
  return (
    <main>
      <ProjectSidebar />
      <ProjectGrid />
    </main>
  );
}
