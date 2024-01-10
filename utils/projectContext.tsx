"use client";

import { projects } from "@/public/_projects";
import { createContext, useState } from "react";

interface ProjectType {
  title: string;
  slug: string;
  date: string;
  tags: string[];
  thumbnail: string;
  content: string;
}

interface ProjectContextType {
  project: object[];
  setProject: React.Dispatch<React.SetStateAction<ProjectType[]>>;
  cat: string;
  setCat: React.Dispatch<React.SetStateAction<string>>;
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
