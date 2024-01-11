import Analytics from "@/components/Analytics";
import Header from "@/components/Header";
import ServicesContents from "@/components/ServicesContents";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
};

export default function Services() {
  return (
    <>
      <Analytics title="Services" />
      <Header hidemenu={true} />
      <ServicesContents />
    </>
  );
}
