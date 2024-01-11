"use client";

import { icons } from "@/utils/icons";
import { ProjectContext } from "@/utils/projectContext";
import { ModalNavType } from "@/utils/types";
import parse from "html-react-parser";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import ReactGA from "react-ga4";

export default function ModalContents({ data }: any) {
  ReactGA.initialize("G-40N9DDPQQT");
  const [loading, setloading] = useState(true);
  const ctx = useContext(ProjectContext);
  const router = useRouter();
  let nextProject = undefined;
  let prevProject = undefined;

  if (ctx) {
    const index = ctx.project.findIndex((p) => p?.slug === data.slug);

    nextProject = ctx.project[index + 1];
    prevProject = ctx.project[index - 1];
  }

  const navigate = (slug: string, direction: ModalNavType) => {
    const modal = document.querySelector(".modal") as HTMLInputElement | null;

    if (modal != null) {
      modal.scrollTop = 0;
      setloading(true);

      // Send pageview with a custom path
      ReactGA.event({
        category: `Modal Button (${direction})`,
        action: `Naviate from '${data.slug}' to '${direction}'`,
        // label: "your label", // optional
        // value: 99, // optional, must be a number
        // nonInteraction: true, // optional, true/false
        // transport: "xhr", // optional, beacon/xhr/image
      });

      router.push(`/projects/${slug}`);
    }

    // add fake load
    setTimeout(() => {
      setloading(false);
    }, 500);
  };

  const renderNavigation = (slug: string, direction: ModalNavType) => {
    return (
      <div
        className={`${
          direction == "next" ? "right-4" : "left-4"
        } fixed  top-[46vh] z-10 flex h-14 w-14 cursor-pointer items-center justify-center rounded-lg border-2 border-eggblue/30 bg-eggblue/30 hover:border-eggblue hover:bg-eggblue/50`}
        onClick={() => navigate(slug, direction)}
      >
        {direction == "next" ? icons.arrowNxt : icons.arrowPrev}
      </div>
    );
  };

  const backToProjectsPage = () => {
    // Send pageview with a custom path
    ReactGA.event({
      category: `Modal Close`,
      action: `Close (${data.slug})`,
      // label: "your label", // optional
      // value: 99, // optional, must be a number
      // nonInteraction: true, // optional, true/false
      // transport: "xhr", // optional, beacon/xhr/image
    });

    router.push(`/projects`);
  };

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 400);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* <Analytics title={data?.title} page={slug} />; */}
      <div className="modal fixed bottom-0 left-0 right-0 top-0 z-50 cursor-context-menu overflow-auto bg-darkblue md:bg-[rgba(8,14,36,.839)]">
        <div className=" mx-auto min-h-[90vh] rounded-lg border-eggblue/10 bg-darkblue outline-none md:relative md:my-12 md:max-w-[720px] md:border-2 md:bg-darkblue lg:max-w-[900px]">
          <>
            {!loading &&
              prevProject &&
              renderNavigation(prevProject.slug, "previous")}

            {!loading &&
              nextProject &&
              renderNavigation(nextProject.slug, "next")}

            {loading ? (
              <div className="absolute flex h-full w-full items-center justify-center">
                <div className="loader" />
              </div>
            ) : (
              <div className="relative">
                <button
                  onClick={backToProjectsPage}
                  className="absolute right-[1rem] top-[0.5rem] flex h-14 w-14 cursor-pointer items-center justify-center rounded-lg border-2 border-eggblue/30 bg-eggblue/30 hover:border-eggblue hover:bg-eggblue/50"
                >
                  {icons.close}
                </button>
                <div className="p-[1rem]" id="scrollHere">
                  <div className="header">
                    <h3 className="mb-0 text-lg font-semibold md:text-xl">
                      {data?.title}
                    </h3>
                    <p className="text-xs text-eggblue/50 md:text-sm">
                      {data?.date}
                    </p>
                  </div>
                  <div>{parse(data?.content)}</div>
                </div>
              </div>
            )}
          </>
        </div>
      </div>
    </>
  );
}
