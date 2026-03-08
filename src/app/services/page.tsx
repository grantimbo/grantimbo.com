// import Analytics from "@/components/Analytics";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import ServicesContents from "@/src/components/Services/ServicesContents";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
};

export default function Services() {
  return (
    <>
      {/* <Analytics title="Services" /> */}
      <Header />
      <ServicesContents />
      <Footer />
    </>
  );
}
