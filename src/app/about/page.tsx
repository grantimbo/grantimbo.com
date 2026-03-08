import AboutContents from "@/src/components/About/AboutContents";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Creator ~ Thinker — Crafting web and beyond experiences, I engineer products with pixel-perfect precision and accessibility in mind.",
};

export default function About() {
  return (
    <>
      <Header />
      <AboutContents />
      <Footer fade />
    </>
  );
}
