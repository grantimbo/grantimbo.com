"use client";

import { ProjectType } from "@/utils/types";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  project: ProjectType,
  parent?: ResolvingMetadata,
): Promise<Metadata> {
  return {
    title: project.title,
    openGraph: {
      images: [`${project.thumbnail}`],
    },
  };
}
