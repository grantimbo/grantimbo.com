"use client";

import { projects } from "@/public/_projects";
import { MenuContext } from "@/utils/menuContext";
import { ProjectContext } from "@/utils/projectContext";
import { useContext } from "react";

type SortButtonType = {
  icon: JSX.Element;
  name: string;
  title: string;
};

const SortButton = (props: SortButtonType) => {
  const ctx = useContext(ProjectContext);
  const ctxMenu = useContext(MenuContext);

  const setPrjCat = () => {
    if (ctx && ctxMenu != null) {
      ctx.setCat(props.name);
      ctxMenu.setProjectLinksMenu(false);

      if (props.name == "all") {
        ctx.setProject(projects);
      } else {
        ctx.setProject(projects?.filter((p) => p.tags.includes(props.name)));
      }
    }
  };

  return (
    <button
      className={`${
        ctx?.cat === props.name
          ? "!border-eggblue !bg-eggblue/30 text-white [&_path]:fill-[#fff]"
          : "border-transparent bg-transparent text-[#bbd5ef] [&_path]:fill-[#bbd5ef]"
      } flex items-center gap-3 rounded-full border-2 px-[1.2rem] py-[0.5rem] text-[0.9rem] hover:border-eggblue/30 hover:bg-eggblue/10`}
      onClick={setPrjCat}
    >
      {props.icon}
      {props.title}
    </button>
  );
};

export default SortButton;
