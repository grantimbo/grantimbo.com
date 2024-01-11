import Analytics from "@/components/Analytics";
import Header from "@/components/Header";
import NotFound from "@/components/NotFound";
import type { Metadata } from "next";

const pageData = {
  title: "404 Not Found",
};

export const metadata: Metadata = {
  title: pageData.title,
  description:
    "The page you are looking for might have been moved or no longer exists.",
};

export default function Projects() {
  return (
    <>
      <Analytics title={pageData.title} />
      <Header fixed={true} />
      <NotFound />
    </>
  );
}
