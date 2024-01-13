import { useContext } from "react";
import { ProjectContext } from "./projectContext";

export default function filtereDProjects() {
  const ctx = useContext(ProjectContext);

  if (ctx) {
    if (ctx?.cat === "all") {
      return ctx?.project;
    } else {
      return ctx?.project?.filter((p) => p.tags.includes(ctx?.cat));
    }
  }
}
