"use client";

import { projects } from "@/public/_projects";
import { icons } from "@/utils/icons";
import { ProjectContext } from "@/utils/projectContext";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect } from "react";
import ReactGA from "react-ga4";
import SortButton from "./SortButton";

const ProjectSort = () => {
  const ctx = useContext(ProjectContext);
  const searchParams = useSearchParams();

  const tag: string | null = searchParams.get("tag");

  useEffect(() => {
    ReactGA.initialize("G-40N9DDPQQT");

    if (tag) {
      ctx?.setCat(tag);

      if (tag == "all") {
        ctx?.setProject(projects);
        ReactGA.send({
          hitType: "pageview",
          page: `/projects`,
          title: `Projects`,
        });
      } else {
        ctx?.setProject(projects?.filter((p) => p.tags.includes(tag)));
        ReactGA.send({
          hitType: "pageview",
          page: `/projects?tag=${tag}`,
          title: `Projects (${tag})`,
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex flex-col gap-[0.4rem] p-2">
        <SortButton icon={icons.allProjects} name="all" title="All" />
        <SortButton icon={icons.cars} name="cars" title="Cars" />
        <SortButton icon={icons.motion} name="motion" title="Motion" />
        <SortButton
          icon={icons.visualization}
          name="visualization"
          title="Visualization"
        />
        <SortButton icon={icons.website} name="website" title="Website" />
        <SortButton
          icon={icons.typography}
          name="typography"
          title="Typography"
        />
        <SortButton icon={icons.abstract} name="abstract" title="Abstract" />
        <SortButton
          icon={icons.photoManipulation}
          name="photomanipulation"
          title="Photo Manipulation"
        />
        <SortButton icon={icons.cyberpunk} name="cyberpunk" title="Cyberpunk" />
      </div>
    </>
  );
};

export default ProjectSort;
