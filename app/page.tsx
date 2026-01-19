import About from "./components/About";
import ProjectsGroup from "./projects/components/ProjectsGroup";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="bg-transparent">
      <About />
      <ProjectsGroup /> 
      <Contact />
    </main>
  );
}
