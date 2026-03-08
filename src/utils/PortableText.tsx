import { shimmer, toBase64 } from "@/src/utils/BlurData";
import { urlFor } from "@/src/utils/sanity";
import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import ReactPlayer from "react-player";
import { PortableTextComponents } from "@portabletext/react";
import { ReactNode } from "react";

export const sanityComponents: PortableTextComponents = {
  types: {
    // Handling the 'image' type inside content
    image: ({ value }: any) => {
      return (
        <figure className="my-8 overflow-hidden rounded-lg">
          <Image
            src={urlFor(value).url()}
            width={getImageDimensions(value).width}
            height={getImageDimensions(value).height}
            alt={value.alt || "Grant Imbo"}
            quality={95}
            sizes="(max-width: 500px) 50vw, (max-width: 768px) 80vw, 100vw"
            placeholder={`data:image/svg+xml;base64,${toBase64(
              shimmer(
                getImageDimensions(value).width,
                getImageDimensions(value).height,
              ),
            )}`}
          />

          {value.caption && (
            <figcaption className="text-softgray mt-2 text-center text-sm italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    youtube: ({ value }: any) => {
      // Basic logic to extract ID or use an embed library
      return (
        value.url && (
          <div className="my-8 aspect-video w-full">
            <ReactPlayer
              className="h-full w-full rounded-lg"
              width="100%"
              height="100%"
              src={value.url}
              controls
            />
          </div>
        )
      );
    },

    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },

  block: {
    // Customizing standard text tags
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 className="my-4 text-4xl font-bold text-white">{children}</h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-eggblue my-3 text-2xl font-semibold">{children}</h2>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="mb-2 leading-tight text-blue-300">{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-eggblue my-4 border-l-4 pl-4 text-white/80 italic">
        {children}
      </blockquote>
    ),
  },
  marks: {
    // Customizing links
    link: ({ children, value }: any) => {
      // 1. Add '?' after value and href to prevent the crash
      const href = value?.href || "";

      // 2. Now startsWith won't run on 'undefined'
      const isInternal = href.startsWith("/");
      const rel = !isInternal ? "noreferrer noopener" : undefined;
      return (
        <a
          href={value.href}
          rel={rel}
          className="text-eggblue underline transition hover:text-white"
        >
          {children}
        </a>
      );
    },
  },
};
