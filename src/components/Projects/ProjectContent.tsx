import { sanityComponents } from "@/src/utils/PortableText";
import { Project } from "@/src/utils/types";
import { PortableText } from "@portabletext/react";
import Gallery from "../Gallery";

function ProjectDate({ date }: { date?: string }) {
  if (!date) return null;
  const d = new Date(date);
  const month = d.toLocaleString("default", { month: "short" });
  const year = d.getFullYear();
  return (
    <div className="inline-block rounded-md border border-blue-600/20 bg-blue-600/10 px-2 py-1 text-[0.8rem] text-blue-300">
      <span className="text-blue-300/50">Date Published: </span>
      {month} {year}
    </div>
  );
}

const titleCase = (str: string): string => {
  if (!str) return ""; // Guard against undefined/null from Sanity
  return str
    .toLowerCase()
    .replace(/(^\w|\s\w)/g, (match: string) => match.toUpperCase());
};

export default function ProjectContent({ data }: { data: Project }) {
  return (
    <main className="mx-auto min-h-[60vh] max-w-250 px-2 py-8 md:px-6">
      <article className="bg-drkblue/30 rounded-lg border-2 border-solid border-blue-600/10 p-3 md:p-8">
        <div className="mb-4">
          <ProjectDate date={data.releaseDate} />
        </div>
        {/* <header className="mb-6 border-b-2 border-blue-600/10 pb-8">
          <h1 className="mb-2 text-2xl font-semibold text-blue-200">
            {data.title}
          </h1>

          <div className="my-2">
            {data?.tags?.map((tag) => (
              <span
                key={tag}
                className="mr-[0.3rem] mb-[0.3rem] inline-block rounded-full border border-blue-800 bg-blue-800/30 px-4 py-[0.2rem] text-[0.6rem] text-blue-200/60 transition-all duration-300 group-hover:border-blue-300/50 group-hover:bg-blue-600/20 group-hover:text-blue-300"
              >
                {titleCase(tag)}
              </span>
            ))}
          </div>
        </header> */}
        {data.content && data.content.length > 0 && (
          <div className="prose prose-invert max-w-none">
            <PortableText value={data.content} components={sanityComponents} />
          </div>
        )}
        {data.gallery && (
          <div className="mt-10">
            <Gallery images={data.gallery} />
          </div>
        )}
      </article>
    </main>
  );
}
