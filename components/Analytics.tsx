"use client";

import { AnalyticsType, ProjectType } from "@/utils/types";
import { useEffect } from "react";
import ReactGA from "react-ga4";

export default function Analytics({ data }: any) {
  useEffect(() => {
    // Multiple products (previously known as trackers)
    ReactGA.initialize("G-40N9DDPQQT");
    // Send pageview with a custom path
    ReactGA.send({
      hitType: "pageview",
      page: `test.com/${data.slug}`,
      title: data.title,
    });
    console.log("send page view");

    return () => {};
  }, [data]);

  return <></>;
}
