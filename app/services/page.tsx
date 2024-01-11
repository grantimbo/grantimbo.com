import Analytics from "@/components/Analytics";
import Header from "@/components/Header";
import ServicesContents from "@/components/ServicesContents";
import type { Metadata } from "next";

const pageData = {
  title: "Services",
};

export const metadata: Metadata = {
  title: pageData.title,
};

export default function Services() {
  return (
    <>
      <Analytics title={pageData.title} />
      <Header hidemenu={true} />
      <ServicesContents />
    </>
  );
}
