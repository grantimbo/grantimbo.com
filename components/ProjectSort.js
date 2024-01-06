import SortButton from "./SortButton";

const ProjectSort = (props) => {
  return (
    <>
      <aside className="sidebar">
        <div className="project-sort">
          <SortButton icon="photo_library" name="all" title="All" {...props} />
          <SortButton icon="motorcycle" name="cars" title="Cars" {...props} />
          <SortButton
            icon="animation"
            name="motion"
            title="Motion"
            {...props}
          />
          <SortButton
            icon="fit_page"
            name="visualization"
            title="Visualization"
            {...props}
          />
          <SortButton icon="code" name="website" title="Website" {...props} />
          <SortButton
            icon="text_format"
            name="typography"
            title="Typography"
            {...props}
          />
          <SortButton
            icon="grain"
            name="abstract"
            title="Abstract"
            {...props}
          />
          <SortButton
            icon="wallpaper"
            name="photomanipulation"
            title="Photo Manipulation"
            {...props}
          />
          <SortButton
            icon="sports_motorsports"
            name="cyberpunk"
            title="Cyberpunk"
            {...props}
          />
        </div>
      </aside>
    </>
  );
};

export default ProjectSort;
