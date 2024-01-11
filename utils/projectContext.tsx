"use client";

import { projects } from "@/public/_projects";
import { ProjectType, Theme } from "@/utils/types";
import { createContext, useState } from "react";

export type ProjectContextType = {
  project: ProjectType[];
  setProject: React.Dispatch<React.SetStateAction<ProjectType[]>>;
  cat: string;
  setCat: React.Dispatch<React.SetStateAction<string>>;
  projectLinksMenu: boolean;
  setProjectLinksMenu: React.Dispatch<React.SetStateAction<boolean>>;
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export const ProjectContext = createContext<ProjectContextType | null>(null);

export default function ProjectContextProvider({ children }: any) {
  const [project, setProject] = useState(projects);
  const [projectCat, setProjectCat] = useState("all");
  const [projectLinksMenu, setProjectLinksMenu] = useState(true);
  const [theme, setTheme] = useState<Theme>("dark");

  return (
    <ProjectContext.Provider
      value={{
        project: project,
        setProject: setProject,
        cat: projectCat,
        setCat: setProjectCat,
        projectLinksMenu: projectLinksMenu,
        setProjectLinksMenu: setProjectLinksMenu,
        theme: theme,
        setTheme: setTheme,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
