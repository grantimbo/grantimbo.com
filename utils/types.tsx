// import { PortableText } from "@portabletext/react";

export type ParamsType = {
  params: {
    slug: string;
  };
};

export type ProjectType = {
  title: string;
  slug: {
    current: string;
  };
  releaseDate: string;
  tags: string[];
  thumbnail: object;
  content?: object[];
};

export type Theme = "light" | "dark";

export type AnalyticsType = {
  page?: string;
  title: string;
};

export type ServiceType = {
  image: any;
  delay: number;
  title: string;
  description: string;
};

export type HeaderProps = {
  hidemenu?: boolean;
  fixed?: boolean;
};

export type HeaderLinkType = {
  pageName: string;
  link: string;
  icon: JSX.Element;
};

export type SocialLinkType = {
  href: string;
  icon: JSX.Element;
};

export type SortProjBtnType = {
  icon: JSX.Element;
  name: string;
  title: string;
};

export type ModalNavType = "next" | "previous";

export type ProjectContextType = {
  project: ProjectType[];
  setProject: React.Dispatch<React.SetStateAction<ProjectType[]>>;
  cat: string;
  setCat: React.Dispatch<React.SetStateAction<string>>;
  projectLinksMenu: boolean;
  setProjectLinksMenu: React.Dispatch<React.SetStateAction<boolean>>;
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
