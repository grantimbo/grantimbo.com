"use client";
import { AnalyticsType } from "@/utils/types";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import ReactGA from "react-ga4";

export default function Analytics({ page, title }: AnalyticsType) {
  const pathname = usePathname();

  useEffect(() => {
    // Multiple products (previously known as trackers)
    ReactGA.initialize("G-40N9DDPQQT");

    // Send pageview with a custom path
    ReactGA.send({
      hitType: "pageview",
      page: page || pathname,
      title: title,
    });

    return () => {};
  }, [page, title, pathname]);

  return <></>;
}
