import type { StaticImageData } from "next/image";
import { PortableTextBlock } from "next-sanity";

export interface Experience {
  _id: string;
  _type: "experience";
  title: string; // Job Title
  companyName?: string; // Company Name
  date: string; // Display Date (e.g., "2014-till")
  publishedDate?: string; // Sort Date (ISO string)
  isFulltime: boolean;
  description: string; // Short text summary
  thumbnail: SanityImage;
  content?: PortableTextBlock[]; // For the "block" type array
  tags?: string[];
}

// Standard Sanity Image structure
export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  hotspot?: { x: number; y: number; height: number; width: number };
  crop?: { top: number; bottom: number; left: number; right: number };
  alt?: string;
}

export type ParamsType = {
  params: {
    slug: string;
  };
};

export interface ProjectContentImage extends SanityImage {
  _type: "image";
  _key: string;
  caption?: string;
  alt?: string;
}

export interface ProjectYouTube {
  _type: "youtube";
  _key: string;
  url: string;
}

export interface Project {
  _id: string;
  _type: "project";
  title: string;
  slug: {
    current: string;
  };
  order?: number;
  description?: string;
  releaseDate?: string;
  tags?: string[];
  thumbnail: SanityImage;
  // The content array can contain text blocks, custom images, or videos
  content: Array<PortableTextBlock | ProjectContentImage | ProjectYouTube>;
  gallery?: SanityImage[];
  categorySlug?: string;
  categoryName?: string;
}

export type AnalyticsType = {
  page?: string;
  title: string;
};

export type ServiceType = {
  image: StaticImageData;
  delay?: number;
  title: string;
  description: string;
  slug?: string;
};

export type HeaderProps = {
  hidemenu?: boolean;
  fixed?: boolean;
};

export type HeaderLinkType = {
  pageName: string;
  link: string;
  icon: React.ReactElement;
};

export type SocialLinkType = {
  href: string;
  icon: React.ReactElement;
};

export type SortProjBtnType = {
  icon: React.ReactElement;
  name: string;
  title: string;
};

export type ModalNavType = "next" | "previous";
