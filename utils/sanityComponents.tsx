import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import ReactPlayer from "react-player";
import { urlFor } from "./imageBuilder";

export const sanityComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <>
          <Image
            src={urlFor(value).url()}
            width={getImageDimensions(value).width}
            height={getImageDimensions(value).height}
            alt={value.alt || "Grant Imbo"}
            placeholder="blur"
            blurDataURL={urlFor(value).width(24).height(24).blur(10).url()}
            sizes=" (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
          />
        </>
      );
    },
    youtube: ({ value }: any) => {
      return value.url && <ReactPlayer url={value.url} />;
    },
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
};
