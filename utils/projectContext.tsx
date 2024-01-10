"use client";

import { projects } from "@/public/_projects";
import { createContext, useState } from "react";

type Theme = "light" | "dark";

export type ProjectType = {
  title: string;
  slug: string;
  date: string;
  tags: string[];
  thumbnail: string;
  content: string;
};

export type ProjectContextType = {
  project: object[];
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
