import Analytics from "@/components/Analytics";
import Header from "@/components/Header";
import ModalContents from "@/components/ModalContents";
import ProjectWrap from "@/components/ProjectWrap";
import { projects } from "@/public/_projects";
import { ParamsType } from "@/utils/types";

async function getData({ params }: ParamsType) {
  const data = projects?.filter((e) => e.slug === params.slug);

  if (data.length === 0) {
    // router.push(`/not-found`);
    throw new Error("Failed to fetch data");
  }

  return data[0];
}

export default async function Projects({ params }: ParamsType) {
  const data = await getData({ params });

  return (
    <>
      <Analytics data={data} />
      <Header fixed={true} />
      <ProjectWrap />
      <ModalContents data={data} />
    </>
  );
}
