import Analytics from "@/components/Analytics";
import Header from "@/components/Header";
import ModalContents from "@/components/ModalContents";
import NotFound from "@/components/NotFound";
import ProjectWrap from "@/components/ProjectWrap";
import { projects } from "@/public/_projects";
import { ParamsType, ProjectType } from "@/utils/types";
import { Metadata, ResolvingMetadata } from "next";

async function getData({ params }: ParamsType) {
  const data = projects.filter((e) => e.slug === params.slug);

  if (data.length === 0) {
    return undefined;
  }

  return data[0];
}

const pageData = {
  title: "Projects",
};

export const metadata: Metadata = {
  title: pageData.title,
};

export default async function Projects({ params }: ParamsType) {
  const data = await getData({ params });

  async function generateMetadata(
    data: ProjectType,
    parent?: ResolvingMetadata,
  ): Promise<Metadata> {
    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent)?.openGraph?.images || [];

    return {
      title: data.title,
      openGraph: {
        images: [data.thumbnail, ...previousImages],
      },
    };
  }

  if (data) {
    generateMetadata(data);
  }

  return (
    <>
      {data && (
        <>
          <Analytics title={`${data.title}`} />
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
