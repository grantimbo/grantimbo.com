import ProjectGrid from "@/components/ProjectGrid";
import ProjectSort from "@/components/ProjectSort";

export default function ProjectWrap() {
  return (
    <main>
      <aside className="sidebar">
        <ProjectSort />
      </aside>
      <section className="container">
        <ProjectGrid />
      </section>
    </main>
  );
}
