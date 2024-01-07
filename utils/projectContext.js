"use client";

import { projects } from "@/public/_projects";
import { createContext, useState } from "react";

export const ProjectContext = createContext({});

export default function ProjectContextProvider({ children }) {
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
