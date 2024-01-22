import AboutContents from "@/components/About/AboutContents";
import Analytics from "@/components/Analytics";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Creator ~ Thinker — Crafting web and beyond experiences, I engineer products with pixel-perfect precision and accessibility in mind.",
};

export default function About() {
  return (
    <>
      <Analytics title="About" />
      <Header hidemenu={true} />
      <AboutContents />
      <Footer />
    </>
  );
}
