"use client";

import { ProjectContext } from "@/utils/projectContext";
import { siteConfig } from "@/utils/siteConfig";
import { SortProjBtnType } from "@/utils/types";
import { useContext } from "react";
import ReactGA from "react-ga4";

export default function ProjectSortButton(props: SortProjBtnType) {
  const ctx = useContext(ProjectContext);

  const setProjectCategory = () => {
    if (ctx != null) {
      ctx.setCat(props.name);
      ctx.setProjectLinksMenu(false);

      siteConfig.enableAnalytics &&
        ReactGA.send({
          hitType: "pageview",
          page: `/projects?tag=${props.name}`,
          title: `Project (${props.name})`,
        });
    }
  };

  return (
    <button
      className={`${
        ctx?.cat === props.name
          ? "!border-eggblue !bg-eggblue/30 text-white [&_path]:fill-[#fff]"
          : "border-transparent bg-transparent text-[#bbd5ef] [&_path]:fill-[#bbd5ef]"
      } flex items-center gap-3 rounded-full border-2 px-[1.2rem] py-[0.5rem] text-[0.9rem] hover:border-eggblue/30 hover:bg-eggblue/10`}
      onClick={() => setProjectCategory()}
      key={props.name}
    >
      {props.icon}
      {props.title}
    </button>
  );
}
