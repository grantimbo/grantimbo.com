"use client";

import { icons } from "@/utils/icons";
import SortButton from "./SortButton";

const ProjectSort = () => {
  return (
    <>
      <div className="project-sort">
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
