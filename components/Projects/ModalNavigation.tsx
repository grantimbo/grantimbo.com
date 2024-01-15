"use client";

import filtereDProjects from "@/utils/filterProjects";
import { icons } from "@/utils/icons";
import { ProjectContext } from "@/utils/projectContext";
import { ModalNavType } from "@/utils/types";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import ReactGA from "react-ga4";

export default function ModalNavigation({
  direction,
  currentSlug,
}: {
  direction: ModalNavType;
  currentSlug: string;
}) {
  ReactGA.initialize("G-40N9DDPQQT");
  const ctx = useContext(ProjectContext);
  const router = useRouter();

  const navigate = ({
    previous,
    next,
    direction,
  }: {
    previous: any;
    next: any;
    direction: ModalNavType;
  }) => {
    const modal = document.querySelector(".modal") as HTMLInputElement | null;

    if (modal != null) {
      modal.scrollTop = 0;
      ctx?.setLoading(true);

      if (direction == "next") {
        ReactGA.event({
          category: `Modal Button (${direction})`,
          action: `Naviate from '/${next?.slug?.current}' to '/${direction}'`,
        });

        router.push(`/projects/${next?.slug?.current}`);
      } else {
        ReactGA.event({
          category: `Modal Button (${direction})`,
          action: `Naviate from '/${previous?.slug?.current}' to '/${direction}'`,
        });
        router.push(`/projects/${previous?.slug?.current}`);
      }
    }
  };

  const currentIndex = filtereDProjects()?.findIndex(
    (p) => p?.slug.current === currentSlug,
  );

  const length = filtereDProjects()?.length;

  const current =
    currentIndex !== undefined && filtereDProjects()?.[currentIndex];

  const previous =
    currentIndex !== undefined &&
    length !== undefined &&
    filtereDProjects()?.[(currentIndex + length - 1) % length];

  const next =
    currentIndex !== undefined &&
    length !== undefined &&
    filtereDProjects()?.[(currentIndex + 1) % length];

  if (previous !== current || next !== current) {
    return (
      <div
        className={`${
          direction == "next" ? "right-4" : "left-4"
        } fixed  top-[46vh] z-10 flex h-14 w-14 cursor-pointer items-center justify-center rounded-lg border-2 border-eggblue/30 bg-eggblue/30 hover:border-eggblue hover:bg-eggblue/50`}
        onClick={() => navigate({ previous, next, direction })}
      >
        {direction == "next" ? icons.arrowNxt : icons.arrowPrev}
      </div>
    );
  }
}
