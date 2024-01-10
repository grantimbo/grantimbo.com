"use client";

import ProjectGrid from "@/components/ProjectGrid";
import ProjectSort from "@/components/ProjectSort";
import { MenuContext } from "@/utils/menuContext";
import { useContext } from "react";

export default function ProjectWrap() {
  const ctxMenu = useContext(MenuContext);

  console.log(ctxMenu?.projectLinksMenu);
  return (
    <main>
      <aside
        className={`${
          ctxMenu?.projectLinksMenu == false ? "-left-full" : "left-0"
        } sidebar fixed  bottom-0 top-[60px] z-20 w-[250px] border-r-2 border-eggblue/10 bg-blue transition-transform duration-1000 md:!left-0`}
        style={{ transition: `all 0.5s ease` }}
      >
        <ProjectSort />
      </aside>
      <section className="block w-full pb-[100px] pt-[60px] md:pl-[250px]">
        <ProjectGrid />
      </section>
    </main>
  );
}
