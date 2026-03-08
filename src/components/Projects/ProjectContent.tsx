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
    <div className="inline-block rounded-md border border-blue-600/20 bg-blue-600/10 px-2 py-1 text-[0.8rem] text-blue-600/50 md:text-xs">
      <span className="text-blue-600/80">Date Published: </span>
      {month} {year}
    </div>
  );
}

export default function ProjectContent({ data }: { data: Project }) {
  return (
    <main className="mx-auto min-h-[60vh] max-w-250 px-4 py-8 md:px-6">
      <article className="bg-darkblue rounded-lg border-2 border-solid border-blue-600/10 p-6 md:p-8">
        <header className="mb-6 border-b-2 border-blue-600/10 pb-4">
          <h1 className="mb-2 text-2xl font-semibold text-blue-600 md:text-3xl">
            {data.title}
          </h1>
          <ProjectDate date={data.releaseDate} />
        </header>
        {data.content && data.content.length > 0 && (
          <div className="prose prose-invert max-w-none">
            <PortableText value={data.content} components={sanityComponents} />
          </div>
        )}
        {data.gallery && <Gallery images={data.gallery} />}
      </article>
    </main>
  );
}
