import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";
import { SanityImage } from "./types";

export const client = createClient({
  projectId: "1jjz614w",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-03-01",
});

const builder = createImageUrlBuilder(client);

/**
 * Transforms a Sanity Image reference into a URL builder.
 * @param source The image object from your Sanity query
 */
export function urlFor(source: SanityImage) {
  return builder.image(source);
}
