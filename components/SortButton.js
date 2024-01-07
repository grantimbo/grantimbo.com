"use client";

import { projects } from "@/public/_projects";
import { ProjectContext } from "@/utils/projectContext";
import { useContext } from "react";

const SortButton = (btn) => {
  const ctx = useContext(ProjectContext);

  const setPrjCat = () => {
    ctx.setCat(btn.name);

    if (btn.name == "all") {
      ctx.setProject(projects);
    } else {
      ctx.setProject(projects?.filter((p) => p.tags.includes(btn.name)));
    }
  };

  return (
    <button
      className={ctx.cat === btn.name ? "menu active" : "menu"}
      onClick={setPrjCat}
    >
      <span className="material-symbols-rounded">{btn?.icon}</span>
      {btn?.title}
    </button>
  );
};

export default SortButton;
