"use client";

import { projects } from "@/public/_projects";
import { ProjectContext } from "@/utils/projectContext";
import { useContext } from "react";

type SortButtonType = {
  icon: JSX.Element;
  name: string;
  title: string;
};

const SortButton = (props: SortButtonType) => {
  const ctx = useContext(ProjectContext);

  const setPrjCat = () => {
    if (ctx != null) {
      ctx.setCat(props.name);

      if (props.name == "all") {
        ctx.setProject(projects);
      } else {
        ctx.setProject(projects?.filter((p) => p.tags.includes(props.name)));
      }
    }
  };

  return (
    <button
      className={ctx?.cat === props.name ? "menu active" : "menu"}
      onClick={setPrjCat}
    >
      {props.icon}
      {props.title}
    </button>
  );
};

export default SortButton;
