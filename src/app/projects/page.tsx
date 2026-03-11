import Projects from "@/components/Projects";
import BackButton from "@/components/BackButton";

export default function ProjectsPage() {
  return (
    <div className="pt-24 min-h-screen">
      <BackButton />
      <Projects />
    </div>
  );
}
