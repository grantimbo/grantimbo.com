"use client";

import { projects } from "@/public/_projects";
import { icons } from "@/utils/icons";
import { ProjectContext } from "@/utils/projectContext";
import parse from "html-react-parser";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function ModalContents({ data }: any) {
  const [loading, setloading] = useState(true);
  const ctx = useContext(ProjectContext);
  const router = useRouter();

  const navigate = (slug: string, direction: "next" | "previous") => {
    const modal = document.querySelector(".modal") as HTMLInputElement | null;

    if (modal != null) {
      modal.scrollTop = 0;
      let index = 0;
      setloading(true);
      ctx?.project.forEach((prj: any, i) => {
        if (prj.slug === slug) {
          direction == "next" ? (index = i + 1) : (index = i - 1);
        }
      });

      const tae: any = ctx?.project[index];
      router.push(`/projects/${tae.slug}`);
    }

    // add fake load
    setTimeout(() => {
      setloading(false);
    }, 500);
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
            {!loading && ctx?.project != data && (
              <div
                className="fixed left-4 top-[46vh] z-10 flex h-14 w-14 cursor-pointer items-center justify-center rounded-lg border-2 border-eggblue/30 bg-eggblue/30 hover:border-eggblue hover:bg-eggblue/50"
                onClick={() => navigate(data?.slug, "previous")}
              >
                {icons.arrowPrev}
              </div>
            )}

            {!loading && ctx?.project?.[ctx?.project?.length - 1] != data && (
              <div
                className="fixed right-4 top-[46vh] z-10 flex h-14 w-14 cursor-pointer items-center justify-center rounded-lg border-2 border-eggblue/30 bg-eggblue/30 hover:border-eggblue hover:bg-eggblue/50"
                onClick={() => navigate(data?.slug, "next")}
              >
                {icons.arrowNxt}
              </div>
            )}

            {loading ? (
              <div className="absolute flex h-full w-full items-center justify-center">
                <div className="loader" />
              </div>
            ) : (
              <div className="relative">
                <Link
                  href={`/projects`}
                  className="absolute right-[1rem] top-[0.5rem] flex h-14 w-14 cursor-pointer items-center justify-center rounded-lg border-2 border-eggblue/30 bg-eggblue/30 hover:border-eggblue hover:bg-eggblue/50"
                >
                  {icons.close}
                </Link>
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
