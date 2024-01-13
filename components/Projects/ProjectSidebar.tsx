"use client";

import ProjectSortButton from "@/components/Projects/ProjectSortButton";
import { categories } from "@/utils/projectCategories";
import { ProjectContext } from "@/utils/projectContext";
import { siteConfig } from "@/utils/siteConfig";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect } from "react";
import ReactGA from "react-ga4";

export default function ProjectSidebar() {
  const ctx = useContext(ProjectContext);
  const searchParams = useSearchParams();
  const tag: string | null = searchParams.get("tag");

  useEffect(() => {
    if (tag) {
      ctx?.setCat(tag);
      siteConfig.enableAnalytics &&
        ReactGA.send({
          hitType: "pageview",
          page: `/projects`,
          title: `Projects`,
        });
    }
  }, []);

  return (
    <aside
      className={`${
        ctx?.projectLinksMenu == false ? "-left-full" : "left-0"
      } sidebar fixed  bottom-0 top-[60px] z-20 w-[250px] border-r-2 border-eggblue/10 bg-blue transition-transform duration-1000 md:!left-0`}
      style={{ transition: `all 0.5s ease` }}
    >
      <div className="flex flex-col gap-[0.4rem] p-2">
        {categories?.map((btn) => (
          <ProjectSortButton
            key={btn.name}
            icon={btn.icon}
            name={btn.name}
            title={btn.title}
          />
        ))}
      </div>
    </aside>
  );
}
