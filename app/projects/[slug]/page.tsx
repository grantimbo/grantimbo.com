import Analytics from "@/components/Analytics";
import Header from "@/components/Header";
import ModalContents from "@/components/ModalContents";
import NotFound from "@/components/NotFound";
import ProjectWrap from "@/components/ProjectWrap";
import { projects } from "@/public/_projects";
import { ParamsType } from "@/utils/types";
import { redirect } from "next/navigation";

async function getData({ params }: ParamsType) {
  const data = projects.filter((e) => e.slug === params.slug);

  if (data.length === 0) {
    return undefined;
  }

  return data[0];
}

export default async function Projects({ params }: ParamsType) {
  const data = await getData({ params });

  return (
    <>
      {data && (
        <>
          <Analytics title={data.title} />
          <Header fixed={true} />
          <ProjectWrap />
          <ModalContents data={data} />
        </>
      )}

      {!data && (
        <>
          <Analytics title={"404 - Error"} />
          <NotFound />
        </>
      )}
    </>
  );
}
