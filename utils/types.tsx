export type ParamsType = {
  params: {
    slug: string;
  };
};

export type ProjectType = {
  title: string;
  slug: string;
  date: string;
  tags: string[];
  thumbnail: string;
  content: string;
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
