"use client";

import ModalClose from "@/components/Projects/ModalClose";
import ModalDate from "@/components/Projects/ModalDate";
import ModalNavigation from "@/components/Projects/ModalNavigation";
import { ProjectContext } from "@/utils/projectContext";
import { sanityComponents } from "@/utils/sanityComponents";
import { PortableText } from "@portabletext/react";
import { useContext, useEffect } from "react";

export default function ModalContents({ data }: any) {
  const ctx = useContext(ProjectContext);

  useEffect(() => {
    if (data) {
      ctx?.setLoading(false);
    }
  }, []);

  return (
    <>
      <div className="modal fixed bottom-0 left-0 right-0 top-0 z-50 cursor-context-menu overflow-auto bg-darkblue md:bg-[rgba(8,14,36,.839)]">
        <div className=" mx-auto min-h-[90vh] rounded-lg border-eggblue/10 bg-darkblue outline-none md:relative md:my-12 md:max-w-[720px] md:border-2 md:bg-darkblue lg:max-w-[900px]">
          <>
            {ctx?.loading ? (
              <div className="absolute flex h-full w-full items-center justify-center">
                <div className="loader" />
              </div>
            ) : (
              <>
                <div className="relative">
                  <ModalClose currentSlug={data?.slug?.current} />
                  <div className="p-[1rem]" id="scrollHere">
                    <div className="mb-4 border-b-2 border-eggblue/10 pb-4">
                      <h3 className="mb-2 text-lg font-semibold text-eggblue md:text-2xl">
                        {data?.title}
                      </h3>
                      <ModalDate date={data?.releaseDate} />
                    </div>
                    <PortableText
                      value={data?.content}
                      components={sanityComponents}
                    />
                  </div>
                </div>

                <ModalNavigation
                  direction="previous"
                  currentSlug={data?.slug?.current}
                />
                <ModalNavigation
                  direction="next"
                  currentSlug={data?.slug?.current}
                />
              </>
            )}
          </>
        </div>
      </div>
    </>
  );
}
