"use client";

import NavigationBar from "./components/navigation/NavigationBar";
import About from "./components/About";
import SkillsGroup from "./(skills)/SkillsGroup";
import ProjectsGroup from "./projects/components/ProjectsGroup";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="text-foreground bg-background">
      <NavigationBar />
      <About />
      <SkillsGroup />
      <ProjectsGroup />
      <Contact />
      <Footer />
    </main>
  );
}
