"use client";

import { projects } from "@/public/_projects";
import { createContext, useState } from "react";

interface ProjectContextType {
  project: object[];
  setProject: (val: any) => void;
  cat: string;
  setCat: (val: string) => void;
}

export const ProjectContext = createContext<ProjectContextType | null>(null);

export default function ProjectContextProvider({ children }: any) {
  const [project, setProject] = useState(projects);
  const [projectCat, setProjectCat] = useState("all");

  return (
    <ProjectContext.Provider
      value={{
        project: project,
        setProject: setProject,
        cat: projectCat,
        setCat: setProjectCat,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
