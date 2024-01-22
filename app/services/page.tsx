import Analytics from "@/components/Analytics";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServicesContents from "@/components/Services/ServicesContents";
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
      <Footer />
    </>
  );
}
