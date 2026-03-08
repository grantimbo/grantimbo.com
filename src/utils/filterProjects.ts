import { ProjectType } from "./types";

export function filterProjects(
  projects: ProjectType[],
  cat: string = "all",
): ProjectType[] {
  if (!projects?.length) return [];
  if (cat === "all") return projects;
  return projects.filter((p) => p?.tags?.includes(cat));
}
