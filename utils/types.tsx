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

export type AnalyticsType = {
  page: string;
  title: string;
};
