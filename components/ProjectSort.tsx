"use client";

import SortButton from "./SortButton";

const ProjectSort = () => {
  return (
    <>
      <div className="project-sort">
        <SortButton icon="photo_library" name="all" title="All" />
        <SortButton icon="motorcycle" name="cars" title="Cars" />
        <SortButton icon="animation" name="motion" title="Motion" />
        <SortButton
          icon="fit_page"
          name="visualization"
          title="Visualization"
        />
        <SortButton icon="code" name="website" title="Website" />
        <SortButton icon="text_format" name="typography" title="Typography" />
        <SortButton icon="grain" name="abstract" title="Abstract" />
        <SortButton
          icon="wallpaper"
          name="photomanipulation"
          title="Photo Manipulation"
        />
        <SortButton
          icon="sports_motorsports"
          name="cyberpunk"
          title="Cyberpunk"
        />
      </div>
    </>
  );
};

export default ProjectSort;
