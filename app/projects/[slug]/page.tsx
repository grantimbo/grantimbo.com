import Analytics from "@/components/Analytics";
import Header from "@/components/Header";
import NotFound from "@/components/NotFound";
import ModalContents from "@/components/Projects/ModalContents";
import ProjectWrap from "@/components/Projects/ProjectWrap";
import { projects } from "@/public/_projects";
import { siteConfig } from "@/utils/siteConfig";
import { ParamsType, ProjectType } from "@/utils/types";
import { Metadata, ResolvingMetadata } from "next";
import { createClient } from "next-sanity";

const client = createClient(siteConfig.sanityConfig);

async function getData({ params }: ParamsType) {
  // const data = projects.filter((e) => e.slug === params.slug);

  const data = await client.fetch(
    `*[_type == "project" && slug.current == "${params.slug}"]`,
    { cache: "no-store" },
  );

  if (data.length === 0) {
    return undefined;
  }

  return data[0];
}

export async function generateMetadata({
  params,
}: ParamsType): Promise<Metadata> {
  const data = await getData({ params });

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent)?.openGraph?.images || [];

  return {
    title: `${data?.title}`,
    description: `${data?.title} — a project by Grant Imbo`,
    openGraph: {
      images: [{ url: `${data?.thumbnail}` }],
    },
  };
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
