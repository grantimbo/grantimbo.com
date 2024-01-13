import { siteConfig } from "@/utils/siteConfig";
import imageUrlBuilder from "@sanity/image-url";

export function urlFor(source: string) {
  return imageUrlBuilder(siteConfig.sanityConfig).image(source);
}
