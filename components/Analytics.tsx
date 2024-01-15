"use client";
import { AnalyticsType } from "@/utils/types";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import ReactGA from "react-ga4";

export default function Analytics({ page, title }: AnalyticsType) {
  ReactGA.initialize("G-40N9DDPQQT");
  const pathname = usePathname();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: page || pathname,
      title: title,
    });

    return () => {};
  }, [page, title, pathname]);

  return <></>;
}
