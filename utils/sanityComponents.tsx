import { shimmer, toBase64 } from "@/utils/BlurData";
import { urlFor } from "@/utils/imageBuilder";
import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import ReactPlayer from "react-player";

export const sanityComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <p>
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
        </p>
      );
    },
    youtube: ({ value }: any) => {
      return (
        value.url && (
          <div className="iframe-wrap">
            <ReactPlayer width="100%" height="100%" url={value.url} controls />
          </div>
        )
      );
    },
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
};
