import AboutContents from "@/components/AboutContents";
import Analytics from "@/components/Analytics";
import Header from "@/components/Header";
import type { Metadata } from "next";

const pageData = {
  title: "Projects",
  path: "/projects",
};

export const metadata: Metadata = {
  title: "About",
  description:
    "Creator ~ Thinker — Crafting web and beyond experiences, I engineer products with pixel-perfect precision and accessibility in mind.",
};

export default function About() {
  return (
    <>
      <Analytics title={pageData.title} />;
      <Header hidemenu={true} />
      <AboutContents />
    </>
  );
}
