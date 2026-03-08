import { shimmer, toBase64 } from "@/src/utils/BlurData";
import { urlFor } from "@/src/utils/sanity";
import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import ReactPlayer from "react-player";
import { PortableTextComponents, PortableText } from "@portabletext/react";
import { ReactNode } from "react";
import AnimateBlock from "@/src/utils/animateBlock";

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
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 className="mb-6 text-3xl font-bold">{children}</h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="mb-4 text-2xl font-bold">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="mb-2 text-xl font-bold">{children}</h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="mb-2 text-lg font-bold">{children}</h4>
    ),
    h5: ({ children }: { children?: React.ReactNode }) => (
      <h5 className="text-md mb-2 font-bold">{children}</h5>
    ),
    // Note: Use 'normal' instead of 'p' for standard Sanity paragraphs
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="mb-2 text-sm font-light">{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-eggblue my-4 border-l-4 pl-4 text-white/80 italic">
        {children}
      </blockquote>
    ),
    code: ({ children }: { children?: React.ReactNode }) => (
      <code className="border-eggblue/30 bg-eggblue/20 text-eggblue/80 inline-block rounded-md border px-[0.35rem] py-[0.15rem] text-[0.75rem] leading-4">
        {children}
      </code>
    ),
  },

  // 1. Add List Styles (ul and ol)
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="mb-4 ml-6 list-disc space-y-2">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="mb-4 ml-6 list-decimal space-y-2">{children}</ol>
    ),
  },

  // 2. Add List Item Style (li)
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="text-sm font-light">{children}</li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li className="text-sm font-light">{children}</li>
    ),
  },

  // 3. Add Inline Styles (Bold, Italic, Link)
  marks: {
    code: ({ children }: { children?: React.ReactNode }) => (
      <code className="border-eggblue/30 bg-eggblue/20 text-eggblue/80 inline-block rounded-md border px-[0.35rem] py-[0.15rem] font-mono text-[0.75rem] leading-4">
        {children}
      </code>
    ),
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }) => <em className="italic-style italic">{children}</em>,
    link: ({ children, value }) => (
      <a
        href={value.href}
        className="text-eggblue cursor-pointer transition hover:text-blue-600"
      >
        {children}
      </a>
    ),
  },
};

export const AnimatedPortableText = ({ value }: { value: any }) => {
  // Base delay and increment value
  const baseDelay = 0.3;
  const increment = 0.2;

  const components: PortableTextComponents = {
    block: {
      // H2 Custom Renderer
      h2: ({ children, index }) => (
        <AnimateBlock delay={baseDelay + index * increment}>
          <h2 className="text-xl font-semibold text-white lg:text-2xl">
            {children}
          </h2>
        </AnimateBlock>
      ),
      // Normal Paragraph Renderer
      normal: ({ children, index }) => (
        <AnimateBlock delay={baseDelay + index * increment}>
          <p>{children}</p>
        </AnimateBlock>
      ),
    },
    marks: {
      code: ({ children }: { children?: React.ReactNode }) => (
        <code className="border-eggblue/30 bg-eggblue/20 text-eggblue/80 inline-block rounded-md border px-[0.35rem] py-[0.15rem] font-mono text-[0.75rem] leading-4">
          {children}
        </code>
      ),
      strong: ({ children }: { children?: React.ReactNode }) => (
        <strong className="font-bold">{children}</strong>
      ),
      em: ({ children }) => <em className="italic-style italic">{children}</em>,
      link: ({ children, value }) => (
        <a
          href={value.href}
          className="text-eggblue cursor-pointer transition hover:text-blue-600"
        >
          {children}
        </a>
      ),
    },
    // Add custom types (like your YouTube or Image components) here if needed
  };

  return <PortableText value={value} components={components} />;
};
