"use client";

import { ProjectContextType, ProjectType, Theme } from "@/utils/types";
import { createClient } from "next-sanity";
import { createContext, useEffect, useState } from "react";
import { siteConfig } from "./siteConfig";

export const ProjectContext = createContext<ProjectContextType | null>(null);

export default function ProjectContextProvider({
  children,
}: React.PropsWithChildren<{}>) {
  useEffect(() => {
    const client = createClient(siteConfig.sanityConfig);
    const fetchProjects = async () => {
      const prj = await client.fetch(`*[_type == "project"] | order(order)`);

      if (prj.length === 0) {
        return undefined;
      }

      setProject(prj);
      console.log("fetch data from contextProvider");
    };

    fetchProjects();
  }, []);

  const [project, setProject] = useState<ProjectType[]>([]);
  const [projectCat, setProjectCat] = useState("all");
  const [projectLinksMenu, setProjectLinksMenu] = useState(true);
  const [theme, setTheme] = useState<Theme>("dark");
  const [loading, setLoading] = useState<boolean>(false);

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
        loading: loading,
        setLoading: setLoading,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
